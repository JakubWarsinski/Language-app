import { Router } from 'express';
import { authController } from '../controllers/auth.controller';

const router = Router();

router.get('/login', (req, res) => authController.loginPage(req, res));

router.post('/login', (req, res) => authController.login(req, res));

router.get('/me', (req, res) => authController.me(req, res));

router.get('/logout', (req, res) => authController.logout(req, res));

export default router;
