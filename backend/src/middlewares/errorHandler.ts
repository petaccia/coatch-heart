import { Response } from "express";

// Interface pour les erreurs personnalisées
export interface AppError extends Error {
  statusCode?: number;
}

// Middleware de gestion des erreurs
export const errorHandler = (err: AppError, res: Response) => {
  // Vérifier si c'est une erreur d'authentification
  // Cette vérification est conservée pour une utilisation future
  // mais n'a pas d'action spécifique pour le moment
  const isAuthError =
    err.name === "AuthenticationError" ||
    err.message.includes("authentication") ||
    err.message.includes("Unauthorized");

  // Utilisation de la variable pour éviter l'avertissement
  if (isAuthError) {
    // À l'avenir, un traitement spécifique pourra être ajouté ici
  }

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    status: "error",
    statusCode,
    message: err.message || "Une erreur est survenue",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

// Fonction pour créer une erreur avec un code de statut
export const createError = (message: string, statusCode: number): AppError => {
  const error: AppError = new Error(message);
  error.statusCode = statusCode;
  return error;
};
