import { Request, Response, NextFunction } from 'express';

// Interface pour les erreurs personnalisées
export interface AppError extends Error {
  statusCode?: number;
}

// Middleware de gestion des erreurs
export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('=== ERREUR MIDDLEWARE GLOBAL ===');
  console.error('Erreur:', err);
  console.log('URL:', req.originalUrl);
  console.log('Méthode:', req.method);

  // Vérifier si c'est une erreur d'authentification
  if (err.name === 'AuthenticationError' || err.message.includes('authentication') || err.message.includes('Unauthorized')) {
    console.log('Erreur d\'authentification détectée');
  }

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message: err.message || 'Une erreur est survenue',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};

// Fonction pour créer une erreur avec un code de statut
export const createError = (message: string, statusCode: number): AppError => {
  const error: AppError = new Error(message);
  error.statusCode = statusCode;
  return error;
};
