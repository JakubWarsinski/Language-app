import { LanguageLevel, LearningGoal } from '@prisma/client';

export const learningProfilesSeed = [
	{
		userId: 1,
		targetLanguage: 'English',
		level: LanguageLevel.INTERMEDIATE,
		goal: LearningGoal.WORK,
	},

	{
		userId: 1,
		targetLanguage: 'Spanish',
		level: LanguageLevel.BEGINNER,
		goal: LearningGoal.TRAVEL,
	},

	{
		userId: 1,
		targetLanguage: 'German',
		level: LanguageLevel.ELEMENTARY,
		goal: LearningGoal.HOBBY,
	},
];
