import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import { createError } from './errorHandler';

// Étendre l'interface Request pour inclure l'utilisateur
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        email: string;
      };
    }
  }
}

// Middleware pour vérifier le token JWT
export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  // Récupérer le token du header Authorization
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return next(createError('Accès non autorisé. Token manquant.', 401));
  }
  
  const token = authHeader.split(' ')[1]; // Format: "Bearer TOKEN"
  
  try {
    // Vérifier et décoder le token
    const decoded = jwt.verify(token, config.jwtSecret) as { id: number; email: string };
    
    // Ajouter les informations de l'utilisateur à la requête
    req.user = {
      id: decoded.id,
      email: decoded.email
    };
    
    next();
  } catch (error) {
    next(createError('Token invalide ou expiré', 401));
  }
};
