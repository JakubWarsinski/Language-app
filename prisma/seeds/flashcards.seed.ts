import { DifficultyLevel } from '@prisma/client';

export const flashcardsSeed = [
	{
		flashcardSetId: 1,
		question: 'What is the capital of France?',
		answer: 'Paris',
		type: 'TEXT',
		explanation: 'Paris is the capital and largest city of France.',
		difficultyLevel: DifficultyLevel.EASY,
	},

	{
		flashcardSetId: 1,
		question: 'Translate: "Hello"',
		answer: 'Hola',
		type: 'TRANSLATION',
		explanation: '"Hola" means "Hello" in Spanish.',
		difficultyLevel: DifficultyLevel.EASY,
	},

	{
		flashcardSetId: 1,
		question: 'What is the past tense of "go"?',
		answer: 'Went',
		type: 'GRAMMAR',
		explanation: '"Went" is the irregular past tense form of "go".',
		difficultyLevel: DifficultyLevel.MEDIUM,
	},

	{
		flashcardSetId: 1,
		question: 'What does "biblioteca" mean?',
		answer: 'Library',
		type: 'VOCABULARY',
		explanation: '"Biblioteca" is the Spanish word for library.',
		difficultyLevel: DifficultyLevel.MEDIUM,
	},

	{
		flashcardSetId: 1,
		question: 'Complete the sentence: She ___ to school every day.',
		answer: 'goes',
		type: 'GRAMMAR',
		explanation: 'Third person singular in Present Simple uses "-es".',
		difficultyLevel: DifficultyLevel.HARD,
	},
];
