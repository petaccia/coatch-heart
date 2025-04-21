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
