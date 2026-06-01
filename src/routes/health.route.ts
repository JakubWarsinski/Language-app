import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
	res.json({
		success: true,
		message: 'API works',
	});
});

export default router;
