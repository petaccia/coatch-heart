import { Router } from 'express';
import authRoutes from './authRoutes';

const router = Router();

// Routes d'API
router.use('/auth', authRoutes);

// Route de test pour vérifier que l'API fonctionne
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'API is running'
  });
});

export default router;
