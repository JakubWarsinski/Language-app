import { prisma } from '../database/prisma';

export class QuizResultRepository {
	async create(data: {
		quizId: number;
		userId: number;
		correctAnswers: number;
		incorrectAnswers: number;
		percentageScore?: number;
	}) {
		return prisma.quizResult.create({
			data,
		});
	}

	async findByUserId(userId: number) {
		return prisma.quizResult.findMany({
			where: { userId },
			include: {
				quiz: true,
			},
		});
	}

	async findByQuizId(quizId: number) {
		return prisma.quizResult.findMany({
			where: { quizId },
		});
	}
}

export const quizResultRepository = new QuizResultRepository();
