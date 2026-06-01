import { DifficultyLevel } from '@prisma/client';
import { prisma } from '../database/prisma';

export class FlashcardSetRepository {
	async create(data: {
		userId: number;
		name: string;
		description?: string;
		category?: string;
		language?: string;
		difficultyLevel?: DifficultyLevel;
	}) {
		return prisma.flashcardSet.create({
			data,
		});
	}

	async findById(id: number) {
		return prisma.flashcardSet.findUnique({
			where: { id },
			include: {
				flashcards: true,
			},
		});
	}

	async findByUserId(userId: number) {
		return prisma.flashcardSet.findMany({
			where: { userId },
		});
	}

	async update(
		id: number,
		data: {
			name?: string;
			description?: string;
			category?: string;
			language?: string;
			difficultyLevel?: DifficultyLevel;
		},
	) {
		return prisma.flashcardSet.update({
			where: { id },
			data,
		});
	}

	async delete(id: number) {
		return prisma.flashcardSet.delete({
			where: { id },
		});
	}
}

export const flashcardSetRepository = new FlashcardSetRepository();
