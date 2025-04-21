import { Request, Response, NextFunction } from 'express';
import { authService, SignupData, LoginData } from '../services/authService';

// Contrôleur d'authentification
export const authController = {
  // Inscription d'un nouvel utilisateur
  async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = req.body;
      
      // Validation basique des données
      if (!name || !email || !password) {
        return res.status(400).json({
          status: 'error',
          message: 'Tous les champs sont requis: nom, email et mot de passe'
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
      
      const userData: SignupData = { name, email, password };
      const result = await authService.signup(userData);
      
      res.status(201).json({
        status: 'success',
        data: result
      });
    } catch (error) {
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
