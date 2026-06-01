import { DifficultyLevel, QuestionType } from '@prisma/client';
import { prisma } from '../database/prisma';

export class QuizQuestionRepository {
	async create(data: { quizId: number; type?: QuestionType; content: string; difficultyLevel?: DifficultyLevel }) {
		return prisma.quizQuestion.create({
			data,
		});
	}

	async findByQuizId(quizId: number) {
		return prisma.quizQuestion.findMany({
			where: { quizId },
			include: {
				answers: true,
			},
		});
	}

	async delete(id: number) {
		return prisma.quizQuestion.delete({
			where: { id },
		});
	}
}

export const quizQuestionRepository = new QuizQuestionRepository();
