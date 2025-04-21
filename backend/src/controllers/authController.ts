import { Request, Response, NextFunction } from 'express';
import { authService, SignupData, LoginData } from '../services/authService';

// Contrôleur d'authentification
export const authController = {
  // Inscription d'un nouvel utilisateur
  async signup(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('=== DÉBUT TRAITEMENT INSCRIPTION ===');
      console.log('Requête d\'inscription reçue:', req.body);
      console.log('Headers:', req.headers);
      const { email, password, firstName, lastName, role, phoneNumber } = req.body;

      // Validation basique des données
      if (!email || !password) {
        console.log('Validation échouée: email ou mot de passe manquant');
        return res.status(400).json({
          status: 'error',
          message: 'Email et mot de passe sont requis'
        });
      }

      // Validation du format de l'email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          status: 'error',
          message: 'Format d\'email invalide'
        });
      }

      // Validation de la longueur du mot de passe
      if (password.length < 8) {
        return res.status(400).json({
          status: 'error',
          message: 'Le mot de passe doit contenir au moins 8 caractères'
        });
      }

      // Validation du rôle si fourni
      if (role && !['ADMIN', 'COACH', 'USER'].includes(role)) {
        return res.status(400).json({
          status: 'error',
          message: 'Rôle invalide. Les rôles valides sont: ADMIN, COACH, USER'
        });
      }

      const userData: SignupData = {
        email,
        password,
        firstName,
        lastName,
        role: role as 'ADMIN' | 'COACH' | 'USER',
        phoneNumber
      };
      console.log('Données utilisateur valides, tentative d\'inscription:', { ...userData, password: '***' });
      const result = await authService.signup(userData);
      console.log('Inscription réussie, résultat:', { userId: result.user.id, email: result.user.email });

      console.log('Réponse envoyée au client:', {
        status: 'success',
        userId: result.user.id,
        email: result.user.email
      });
      console.log('=== FIN TRAITEMENT INSCRIPTION ===');

      res.status(201).json({
        status: 'success',
        data: result
      });
    } catch (error) {
      console.log('=== ERREUR TRAITEMENT INSCRIPTION ===');
      console.log('Erreur:', error);
      console.log('=== FIN ERREUR TRAITEMENT INSCRIPTION ===');
      next(error);
    }
  },

  // Connexion d'un utilisateur existant
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      // Validation basique des données
      if (!email || !password) {
        return res.status(400).json({
          status: 'error',
          message: 'Email et mot de passe requis'
        });
      }

      const loginData: LoginData = { email, password };
      const result = await authService.login(loginData);

      res.status(200).json({
        status: 'success',
        data: result
      });
    } catch (error) {
      next(error);
    }
  }
};
