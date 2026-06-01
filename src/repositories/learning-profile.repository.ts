import { LanguageLevel, LearningGoal } from '@prisma/client';
import { prisma } from '../database/prisma';

export class LearningProfileRepository {
	async create(data: { userId: number; targetLanguage: string; level?: LanguageLevel; goal?: LearningGoal }) {
		return prisma.learningProfile.create({
			data,
		});
	}

	async findByUserId(userId: number) {
		return prisma.learningProfile.findMany({
			where: { userId },
		});
	}

	async update(
		id: number,
		data: {
			targetLanguage?: string;
			level?: LanguageLevel;
			goal?: LearningGoal;
		},
	) {
		return prisma.learningProfile.update({
			where: { id },
			data,
		});
	}

	async delete(id: number) {
		return prisma.learningProfile.delete({
			where: { id },
		});
	}
}

export const learningProfileRepository = new LearningProfileRepository();
