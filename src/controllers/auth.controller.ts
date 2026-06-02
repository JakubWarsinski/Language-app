import { Request, Response } from 'express';
import * as argon2 from 'argon2';
import { userRepository } from '../repositories/user.repository';
import { signToken } from '../utils/jwt';

const RENDER_VIEW_PATH = 'auth/login';

export class AuthController {
	loginPage(req: Request, res: Response) {
		return res.render(RENDER_VIEW_PATH, {
			error: null,
		});
	}

	async login(req: Request, res: Response) {
		const { email, password } = req.body;

		try {
			const user = await userRepository.findByEmail(email);

			if (!user) {
				return res.status(401).render(RENDER_VIEW_PATH, {
					error: 'Invalid credentials',
				});
			}

			const valid = await argon2.verify(user.password, password);

			if (!valid) {
				return res.status(401).render(RENDER_VIEW_PATH, {
					error: 'Invalid credentials',
				});
			}

			const token = signToken({
				userId: user.id,
				email: user.email,
				username: user.username,
			});

			res.cookie('token', token, {
				httpOnly: true,
				secure: false,
				maxAge: 1000 * 60 * 60,
			});

			return res.redirect('/users/me');
		} catch (error) {
			return res.status(500).send('Server error');
		}
	}

	me(req: Request, res: Response) {
		const token = req.cookies.token;

		if (!token) {
			return res.redirect('/auth/login');
		}

		try {
			const decoded = require('jsonwebtoken').verify(token, process.env.JWT_SECRET!);

			return res.send(decoded);
		} catch {
			return res.redirect('/auth/login');
		}
	}

	logout(req: Request, res: Response) {
		res.clearCookie('token');

		return res.redirect('/auth/login');
	}
}

export const authController = new AuthController();
