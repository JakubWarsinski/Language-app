import { prisma } from '../database/prisma';

export class QuizAnswerRepository {
	async create(data: { questionId: number; content: string; isCorrect?: boolean }) {
		return prisma.quizAnswer.create({
			data,
		});
	}

	async findByQuestionId(questionId: number) {
		return prisma.quizAnswer.findMany({
			where: { questionId },
		});
	}

	async delete(id: number) {
		return prisma.quizAnswer.delete({
			where: { id },
		});
	}
}

export const quizAnswerRepository = new QuizAnswerRepository();
