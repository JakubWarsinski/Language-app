import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export function requireAuth(req: Request, res: Response, next: NextFunction) {
	const token = req.cookies.token;

	if (!token) {
		return res.redirect('/auth/login');
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
			userId: number;
			email: string;
			username: string;
		};

		req.user = decoded;

		next();
	} catch {
		return res.redirect('/auth/login');
	}
}
