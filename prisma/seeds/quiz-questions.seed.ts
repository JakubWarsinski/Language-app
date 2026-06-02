import { DifficultyLevel, QuestionType } from '@prisma/client';

export const quizQuestionsSeed = [
	// QUIZ 1 — English Grammar Basics

	{
		quizId: 1,

		type: QuestionType.SINGLE_CHOICE,

		content: 'Which sentence is grammatically correct?',

		difficultyLevel: DifficultyLevel.EASY,
	},

	{
		quizId: 1,

		type: QuestionType.TRUE_FALSE,

		content: '"She go to school" is a correct sentence.',

		difficultyLevel: DifficultyLevel.EASY,
	},

	{
		quizId: 1,

		type: QuestionType.OPEN,

		content: 'Write the past tense form of "eat".',

		difficultyLevel: DifficultyLevel.MEDIUM,
	},

	// QUIZ 2 — Spanish Vocabulary Quiz

	{
		quizId: 2,

		type: QuestionType.SINGLE_CHOICE,

		content: 'What does "casa" mean in English?',

		difficultyLevel: DifficultyLevel.EASY,
	},

	{
		quizId: 2,

		type: QuestionType.MULTIPLE_CHOICE,

		content: 'Select Spanish greetings.',

		difficultyLevel: DifficultyLevel.MEDIUM,
	},

	// QUIZ 3 — German Travel Expressions

	{
		quizId: 3,

		type: QuestionType.OPEN,

		content: 'How do you say "Thank you" in German?',

		difficultyLevel: DifficultyLevel.EASY,
	},

	{
		quizId: 3,

		type: QuestionType.TRUE_FALSE,

		content: '"Bahnhof" means airport in German.',

		difficultyLevel: DifficultyLevel.HARD,
	},
];
