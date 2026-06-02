import { Request, Response } from 'express';
import { userRepository } from '../repositories/user.repository';

export class UserController {
	async me(req: Request, res: Response) {
		const userId = req.user?.userId;

		if (!userId) {
			return res.redirect('/auth/login');
		}

		try {
			const user = await userRepository.findById(userId);

			if (!user) {
				return res.status(404).send('User not found');
			}

			return res.render('user/profile', {
				user,
			});
		} catch (error) {
			return res.status(500).send('Server error');
		}
	}
}

export const userController = new UserController();
