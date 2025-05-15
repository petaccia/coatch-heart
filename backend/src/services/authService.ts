import bcrypt from "bcrypt";
import jwt, { SignOptions } from "jsonwebtoken";
import prisma from "../utils/prisma";
import config from "../config";
import { createError } from "../middlewares/errorHandler";

// Interface pour les données d'inscription
export interface SignupData {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  role?: "ADMIN" | "COACH" | "USER";
  phoneNumber?: string;
}

// Interface pour les données de connexion
export interface LoginData {
  email: string;
  password: string;
}

// Service d'authentification
export const authService = {
  // Génération de token JWT
  generateToken(user: any): string {
    return jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role
      },
      config.jwtSecret,
      { expiresIn: '1h' } as SignOptions
    );
  },
  // Inscription d'un nouvel utilisateur
  async signup(data: SignupData) {
    const { email, password, firstName, lastName, role, phoneNumber } = data;

    // Vérifier si l'email existe déjà
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw createError("Cet email est déjà utilisé", 400);
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, config.bcryptSaltRounds);
    try {
      // Créer l'utilisateur

      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          firstName,
          lastName,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          role: role as any, // Conversion nécessaire pour TypeScript
          phoneNumber,
        },
      });

      // Générer un token JWT
      const signOptions: SignOptions = { expiresIn: config.jwtExpiresIn };

      // Génération du token avec ID converti en string
      const token = jwt.sign(
        {
          id: user.id.toString(),
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
          phoneNumber: user.phoneNumber,
        },
        config.jwtSecret as jwt.Secret,
        signOptions,
      );
      await prisma.user.update({
        where: { id: user.id },
        data: { lastLogin: new Date() },
      });

      // Retourner les informations de l'utilisateur (sans le mot de passe) et le token
      const response = {
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
          profilePicture: user.profilePicture,
          phoneNumber: user.phoneNumber,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
        token,
      };
      return response;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // Type assertion pour error
      throw createError(
        `Erreur lors de la création de l'utilisateur: ${error.message || "Erreur inconnue"}`,
        500,
      );
    }
  },

  // Connexion d'un utilisateur existant
  async login(data: LoginData) {
    const { email, password } = data;

    // Rechercher l'utilisateur par email
    // Dans la méthode login
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        password: true,
        role: true,
        firstName: true,
        lastName: true,
        phoneNumber: true,
      },
    });

    if (!user || !user.password) {
      throw createError("Email ou mot de passe incorrect", 401);
    }

    // Vérifier le mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw createError("Email ou mot de passe incorrect", 401);
    }

    // Générer un token JWT
    const signOptions: SignOptions = { expiresIn: "24h" };

    const token = jwt.sign(
      {
        id: user.id.toString(),
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        phoneNumber: user.phoneNumber,
      },
      config.jwtSecret,
      signOptions,
    );

    // Mettre à jour la date de dernière connexion
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() },
    });

    return {
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      token,
    };
  },

  // Recherche ou création d'un utilisateur via un provider social
  async findOrCreateSocialUser({ email, firstName, lastName, provider }: { email: string; firstName?: string; lastName?: string; provider: string }) {
    // Vérifier si l'utilisateur existe déjà
    let user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          firstName,
          lastName,
          provider,
          // On peut définir un rôle par défaut pour les utilisateurs sociaux
          role: "USER",
        },
      });
    }
    // Mettre à jour la date de dernière connexion
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() },
    });
    // Retourner l'utilisateur sans le mot de passe
    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      profilePicture: user.profilePicture,
      phoneNumber: user.phoneNumber,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      provider: user.provider,
    };
  },
};
