import { Router } from 'express';

import { userController } from '../controllers/user.controller';
import { requireAuth } from '../middlewares/auth.middleware';

const router = Router();

router.get('/me', requireAuth, (req, res) => userController.me(req, res));

export default router;
