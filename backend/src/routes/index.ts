import { Router } from 'express';
import authRoutes from './authRoutes';
import googleAuthRoutes from './googleAuthRoutes';
import facebookAuthRoutes from './facebookAuthRoutes';

const router = Router();

// Routes d'API
router.use('/auth', authRoutes);
router.use('/auth', googleAuthRoutes);
router.use('/auth', facebookAuthRoutes);

export default router;
