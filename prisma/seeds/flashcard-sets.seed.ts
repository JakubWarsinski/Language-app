import { DifficultyLevel } from '@prisma/client';

export const flashcardSetsSeed = [
	{
		userId: 1,

		name: 'English Basics',
		description: 'Basic English vocabulary and grammar exercises.',

		category: 'English',
		language: 'English',

		difficultyLevel: DifficultyLevel.EASY,
	},

	{
		userId: 1,

		name: 'Spanish Travel Phrases',
		description: 'Useful Spanish phrases for traveling abroad.',

		category: 'Spanish',
		language: 'Spanish',

		difficultyLevel: DifficultyLevel.MEDIUM,
	},

	{
		userId: 1,

		name: 'German Grammar Essentials',
		description: 'Core German grammar rules and examples.',

		category: 'German',
		language: 'German',

		difficultyLevel: DifficultyLevel.HARD,
	},
];
