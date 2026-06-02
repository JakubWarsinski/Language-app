import { prisma } from '../database/prisma';

export class UserRepository {
	async create(data: {
		username: string;
		email: string;
		password: string;
		firstName?: string;
		lastName?: string;
		phone?: string;
	}) {
		return prisma.user.create({
			data,
		});
	}

	async findById(id: number) {
		return prisma.user.findUnique({
			where: { id },
		});
	}

	async findByEmail(email: string) {
		return prisma.user.findUnique({
			where: { email },
		});
	}

	async findByUsername(username: string) {
		return prisma.user.findUnique({
			where: { username },
		});
	}

	async updateLastLogin(id: number) {
		return prisma.user.update({
			where: { id },
			data: {
				lastLogin: new Date(),
			},
		});
	}

	async update(
		id: number,
		data: {
			firstName?: string;
			lastName?: string;
			phone?: string;
		},
	) {
		return prisma.user.update({
			where: { id },
			data,
		});
	}

	async delete(id: number) {
		return prisma.user.delete({
			where: { id },
		});
	}
}

export const userRepository = new UserRepository();
