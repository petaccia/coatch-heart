import { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import config from '../config';

const router = Router();

// Route pour démarrer l'authentification Google
router.get('/google', (req, res, next) => {
  console.log('=== DÉBUT AUTHENTIFICATION GOOGLE ===');
  console.log('Requête reçue pour l\'authentification Google');
  console.log('URL:', req.originalUrl);
  console.log('Headers:', req.headers);
  next();
}, passport.authenticate('google', { scope: ['profile', 'email'] }));

// Route de callback après l'authentification Google
router.get(
  '/google/callback',
  (req, res, next) => {
    console.log('=== CALLBACK AUTHENTIFICATION GOOGLE ===');
    console.log('Callback reçu de Google');
    console.log('URL:', req.originalUrl);
    console.log('Query params:', req.query);
    next();
  },
  passport.authenticate('google', { session: false, failureRedirect: `${config.frontendUrl}/login?error=google_auth_failed`, failWithError: true }),
  (req, res) => {
    try {
      console.log('=== GÉNÉRATION TOKEN JWT ===');
      // L'utilisateur est authentifié, générer un JWT
      const user = req.user as any;

      if (!user) {
        console.log('Erreur: Utilisateur non défini après authentification');
        return res.redirect(`${config.frontendUrl}/login?error=user_not_found`);
      }

      console.log('Utilisateur authentifié:', { id: user.id, email: user.email });

      const token = jwt.sign(
        { id: user.id, email: user.email },
        config.jwtSecret as jwt.Secret,
        { expiresIn: config.jwtExpiresIn }
      );

      // Rediriger vers le frontend avec le token
      res.redirect(`${config.frontendUrl}/auth/callback?token=${token}`);
    } catch (error) {
      console.log('=== ERREUR GÉNÉRATION TOKEN JWT ===');
      console.error('Erreur lors de la génération du token:', error);
      console.log('Message d\'erreur:', (error as Error).message);
      console.log('Stack trace:', (error as Error).stack);
      res.redirect(`${config.frontendUrl}/login?error=token_generation_failed`);
    }
  }
);

export default router;
