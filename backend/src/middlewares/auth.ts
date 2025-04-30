import { Request, Response, NextFunction } from "express";
import jwt, {
  VerifyOptions,
  JsonWebTokenError,
  TokenExpiredError,
} from "jsonwebtoken";
import config from "../config";
import { createError } from "./errorHandler";
import prisma from "../utils/prisma";
import { User } from "@prisma/client";

// Étendre l'interface Request pour inclure l'utilisateur
// Déclaration de module pour étendre l'interface Request
declare module "express" {
  interface Request {
    user?: User;
  }
}

// JWT payload with required claims
interface JwtPayload {
  id: string;
  email: string;
  role: "ADMIN" | "COACH" | "USER";
  iat: number;
  exp: number;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
}

// Middleware pour vérifier le token JWT (maintenant async)
export const authenticateJWT = async (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  // Récupérer le token du header Authorization
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(
      createError("Accès non autorisé. Token manquant ou invalide.", 401),
    );
  }

  const token = authHeader.split(" ")[1];

  try {
    const verifyOptions: VerifyOptions = {
      algorithms: ["HS256"],
      ignoreExpiration: false,
      ignoreNotBefore: false,
      clockTolerance: 0,
      maxAge: "1h",
      clockTimestamp: Math.floor(Date.now() / 1000),
    };

    // Vérifier et décoder le token
    const decoded = jwt.verify(
      token,
      config.jwtSecret,
      verifyOptions,
    ) as JwtPayload;

    // Vérifier la structure du payload décodé
    if (
      !decoded ||
      typeof decoded !== "object" ||
      !("id" in decoded) ||
      !("email" in decoded)
    ) {
      return next(createError("Payload du token invalide.", 401));
    }

    // Après la vérification du token
    // Validate payload structure
    const payload = decoded;

    if (!payload.id || !payload.email || !payload.role) {
      return next(createError("Payload JWT incomplet", 401));
    }

    // Vérification du type de rôle
    if (!["ADMIN", "COACH", "USER"].includes(payload.role)) {
      return next(createError("Rôle utilisateur invalide", 401));
    }

    // Vérifier si l'utilisateur existe réellement en base de données
    // Utilise le modèle User importé
    // Conversion de l'ID de chaîne en nombre pour la requête Prisma
    const userId = parseInt(payload.id, 10);

    // Vérifier que la conversion a réussi
    if (isNaN(userId)) {
      return next(createError("ID utilisateur invalide dans le token.", 401));
    }

    const userExists = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        role: true,
        firstName: true,
        lastName: true,
        phoneNumber: true,
      },
    });

    if (!userExists) {
      // Utiliser createError pour la cohérence
      return next(
        createError("Token associé à un utilisateur inexistant.", 401),
      );
    }

    // Ajouter les informations de l'utilisateur à la requête
    // Conversion de l'ID numérique en chaîne et adaptation au type User
    req.user = {
      ...userExists,
      id: userExists.id,
    } as unknown as User;

    next(); // Passer au middleware ou à la route suivante
  } catch (error) {
    console.error("Erreur d'authentification JWT:", error); // Log pour le débogage

    if (error instanceof TokenExpiredError) {
      return next(createError("Token expiré.", 401));
    }
    if (error instanceof JsonWebTokenError) {
      // Gère signature invalide, malformé, etc.
      return next(createError("Token invalide.", 401));
    }
    // Gérer d'autres erreurs potentielles (ex: erreur BDD lors de .exists())
    return next(createError("Erreur lors de l'authentification.", 500));
  }
};
