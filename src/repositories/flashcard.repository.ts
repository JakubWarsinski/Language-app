import { DifficultyLevel } from '@prisma/client';
import { prisma } from '../database/prisma';

export class FlashcardRepository {
	async create(data: {
		flashcardSetId: number;
		question: string;
		answer: string;
		type?: string;
		explanation?: string;
		difficultyLevel?: DifficultyLevel;
	}) {
		return prisma.flashcard.create({
			data,
		});
	}

	async findBySetId(flashcardSetId: number) {
		return prisma.flashcard.findMany({
			where: { flashcardSetId },
		});
	}

	async update(
		id: number,
		data: {
			question?: string;
			answer?: string;
			type?: string;
			explanation?: string;
			difficultyLevel?: DifficultyLevel;
		},
	) {
		return prisma.flashcard.update({
			where: { id },
			data,
		});
	}

	async delete(id: number) {
		return prisma.flashcard.delete({
			where: { id },
		});
	}
}

export const flashcardRepository = new FlashcardRepository();
