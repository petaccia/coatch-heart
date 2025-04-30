import { Request, Response, NextFunction } from 'express';

/**
 * Wrapper pour gérer les middlewares et contrôleurs asynchrones
 * Capture les erreurs et les transmet au middleware de gestion d'erreurs d'Express
 *
 * @param fn Fonction asynchrone à exécuter
 * @returns Middleware Express compatible
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const asyncHandler = (fn: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (req: any, res: any, next: any): void => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
