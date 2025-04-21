import bcrypt from 'bcrypt';
import jwt, { SignOptions } from 'jsonwebtoken';
import prisma from '../utils/prisma';
import config from '../config';
import { createError } from '../middlewares/errorHandler';

// Interface pour les données d'inscription
export interface SignupData {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  role?: 'ADMIN' | 'COACH' | 'USER';
  phoneNumber?: string;
}

// Interface pour les données de connexion
export interface LoginData {
  email: string;
  password: string;
}

// Service d'authentification
export const authService = {
  // Inscription d'un nouvel utilisateur
  async signup(data: SignupData) {
    const { email, password, firstName, lastName, role, phoneNumber } = data;

    // Vérifier si l'email existe déjà
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      throw createError('Cet email est déjà utilisé', 400);
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, config.bcryptSaltRounds);

    // Créer l'utilisateur
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        role: role as any, // Conversion nécessaire pour TypeScript
        phoneNumber
      }
    });

    // Générer un token JWT
    const signOptions: SignOptions = { expiresIn: config.jwtExpiresIn };
    const token = jwt.sign(
      { id: user.id, email: user.email },
      config.jwtSecret as jwt.Secret,
      signOptions
    );

    // Mettre à jour la date de dernière connexion
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() }
    });

    // Retourner les informations de l'utilisateur (sans le mot de passe) et le token
    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        profilePicture: user.profilePicture,
        phoneNumber: user.phoneNumber,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      },
      token
    };
  },

  // Connexion d'un utilisateur existant
  async login(data: LoginData) {
    const { email, password } = data;

    // Rechercher l'utilisateur par email
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      throw createError('Email ou mot de passe incorrect', 401);
    }

    // Vérifier le mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw createError('Email ou mot de passe incorrect', 401);
    }

    // Générer un token JWT
    const signOptions: SignOptions = { expiresIn: config.jwtExpiresIn };
    const token = jwt.sign(
      { id: user.id, email: user.email },
      config.jwtSecret as jwt.Secret,
      signOptions
    );

    // Mettre à jour la date de dernière connexion
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() }
    });

    // Retourner les informations de l'utilisateur (sans le mot de passe) et le token
    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        profilePicture: user.profilePicture,
        phoneNumber: user.phoneNumber,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      },
      token
    };
  }
};
