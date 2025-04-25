import { Router } from 'express';
import passport from 'passport';
import jwt, { SignOptions, Secret } from 'jsonwebtoken';
import config from '../config';

const router = Router();

// Route pour démarrer l'authentification Facebook
router.get('/facebook', (req, res, next) => {
  console.log('=== DÉBUT AUTHENTIFICATION FACEBOOK ===');
  console.log('Requête reçue pour l\'authentification Facebook');
  console.log('URL:', req.originalUrl);
  console.log('Headers:', req.headers);
  next();
}, passport.authenticate('facebook', { scope: ['email'] }));

// Route de callback après l'authentification Facebook
router.get(
  '/facebook/callback',
  (req, res, next) => {
    console.log('=== CALLBACK AUTHENTIFICATION FACEBOOK ===');
    console.log('Callback reçu de Facebook');
    console.log('URL:', req.originalUrl);
    console.log('Query params:', req.query);
    next();
  },
  passport.authenticate('facebook', { 
    session: false, 
    failureRedirect: `${config.frontendUrl}/login?error=facebook_auth_failed`,
    failWithError: true 
  }),
  (req, res) => {
    try {
      console.log('=== GÉNÉRATION TOKEN JWT ===');
      const user = req.user as any;

      if (!user) {
        console.log('Erreur: Utilisateur non défini après authentification');
        return res.redirect(`${config.frontendUrl}/login?error=user_not_found`);
      }

      console.log('Utilisateur authentifié:', { id: user.id, email: user.email });

      const signOptions: SignOptions = {
        expiresIn: '24h'
      };

      const token = jwt.sign(
        { id: user.id, email: user.email },
        config.jwtSecret as Secret,
        signOptions
      );

      res.redirect(`${config.frontendUrl}/auth/callback?token=${token}`);
    } catch (error) {
      console.log('=== ERREUR GÉNÉRATION TOKEN JWT ===');
      console.error('Erreur lors de la génération du token:', error);
      res.redirect(`${config.frontendUrl}/login?error=token_generation_failed`);
    }
  }
);

export default router;