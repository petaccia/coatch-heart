import { Router } from 'express';
import authRoutes from './authRoutes';
import googleAuthRoutes from './googleAuthRoutes';

const router = Router();

// Routes d'API
router.use('/auth', authRoutes);

// Routes d'authentification Google
router.use('/auth', googleAuthRoutes);

// Route de test pour vérifier que l'API fonctionne
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'API is running'
  });
});

export default router;
