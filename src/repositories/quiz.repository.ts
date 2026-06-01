import { prisma } from '../database/prisma';

export class QuizRepository {
	async create(data: { userId: number; name: string; description?: string }) {
		return prisma.quiz.create({
			data,
		});
	}

	async findById(id: number) {
		return prisma.quiz.findUnique({
			where: { id },
			include: {
				questions: {
					include: {
						answers: true,
					},
				},
			},
		});
	}

	async findByUserId(userId: number) {
		return prisma.quiz.findMany({
			where: { userId },
		});
	}

	async updateQuestionCount(id: number, questionCount: number) {
		return prisma.quiz.update({
			where: { id },
			data: {
				questionCount,
			},
		});
	}

	async delete(id: number) {
		return prisma.quiz.delete({
			where: { id },
		});
	}
}

export const quizRepository = new QuizRepository();
