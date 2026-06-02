import 'dotenv/config';
import * as argon2 from 'argon2';

import { PrismaClient } from '@prisma/client';
import { usersSeed } from './seeds/user.seed';
import { learningProfilesSeed } from './seeds/learning-profiles.seed';
import { flashcardsSeed } from './seeds/flashcards.seed';
import { flashcardSetsSeed } from './seeds/flashcard-sets.seed';
import { quizAnswersSeed } from './seeds/quiz-answers.seed';
import { quizQuestionsSeed } from './seeds/quiz-questions.seed';
import { quizzesSeed } from './seeds/quizzes.seed';
import { quizResultsSeed } from './seeds/quiz-results.seed';
import { seedModel } from './utils/seed.util';

const prisma = new PrismaClient();

async function main() {
	console.log('Rozpoczęcie seedowania...');

	await prisma.$executeRawUnsafe(`DELETE FROM sqlite_sequence;`);

	const usersSeedHashed = await Promise.all(
		usersSeed.map(async (user) => ({
			...user,
			password: await argon2.hash(user.password),
		})),
	);

	await seedModel({
		model: prisma.user,
		data: usersSeedHashed,
		entityName: 'User',
	});

	await seedModel({
		model: prisma.learningProfile,
		data: learningProfilesSeed,
		entityName: 'LearningProfile',
	});

	await seedModel({
		model: prisma.flashcardSet,
		data: flashcardSetsSeed,
		entityName: 'FlashcardSet',
	});

	await seedModel({
		model: prisma.flashcard,
		data: flashcardsSeed,
		entityName: 'Flashcard',
	});

	await seedModel({
		model: prisma.quiz,
		data: quizzesSeed,
		entityName: 'Quiz',
	});

	await seedModel({
		model: prisma.quizQuestion,
		data: quizQuestionsSeed,
		entityName: 'QuizQuestion',
	});

	await seedModel({
		model: prisma.quizAnswer,
		data: quizAnswersSeed,
		entityName: 'QuizAnswer',
	});

	await seedModel({
		model: prisma.quizResult,
		data: quizResultsSeed,
		entityName: 'QuizResult',
	});

	console.log('Ukończono dodawać wszystkie dane.');
}

main()
	.catch((error) => {
		console.error(error);

		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
