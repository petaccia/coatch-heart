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
    console.log('=== DÉBUT SERVICE INSCRIPTION ===');
    const { email, password, firstName, lastName, role, phoneNumber } = data;
    console.log('Données reçues par le service:', { ...data, password: '***' });

    // Vérifier si l'email existe déjà
    console.log('Vérification si l\'email existe déjà:', email);
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      console.log('Email déjà utilisé:', email);
      throw createError('Cet email est déjà utilisé', 400);
    }

    console.log('Email disponible, poursuite de l\'inscription');

    // Hasher le mot de passe
    console.log('Hashage du mot de passe avec bcrypt, saltRounds:', config.bcryptSaltRounds);
    const hashedPassword = await bcrypt.hash(password, config.bcryptSaltRounds);
    console.log('Mot de passe hashé avec succès');

    // Créer l'utilisateur
    console.log('Tentative de création de l\'utilisateur avec les données:', {
      email,
      firstName,
      lastName,
      role,
      phoneNumber
    });

    try {
      // Créer l'utilisateur
      console.log('Appel à prisma.user.create avec les données:', {
        email,
        firstName,
        lastName,
        role,
        phoneNumber
      });

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

      console.log('Utilisateur créé avec succès dans la base de données, ID:', user.id);

      console.log('Utilisateur créé avec succès, ID:', user.id);

      // Générer un token JWT
      console.log('Génération du token JWT pour l\'utilisateur:', user.id);
      const signOptions: SignOptions = { expiresIn: config.jwtExpiresIn };
      console.log('Options JWT:', { expiresIn: config.jwtExpiresIn });

      // Génération du token avec ID converti en string
      const token = jwt.sign(
        {
          id: user.id.toString(),
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
          phoneNumber: user.phoneNumber
        },
        config.jwtSecret as jwt.Secret,
        signOptions
      );
      console.log('Token JWT généré avec succès');

      // Mettre à jour la date de dernière connexion
      console.log('Mise à jour de la date de dernière connexion pour l\'utilisateur:', user.id);
      await prisma.user.update({
        where: { id: user.id },
        data: { lastLogin: new Date() }
      });
      console.log('Date de dernière connexion mise à jour avec succès');

      // Retourner les informations de l'utilisateur (sans le mot de passe) et le token
      console.log('Préparation de la réponse pour le client');
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
          updatedAt: user.updatedAt
        },
        token
      };
      console.log('Réponse prête à être envoyée:', { userId: response.user.id, email: response.user.email });
      console.log('=== FIN SERVICE INSCRIPTION ===');
      return response;
    } catch (error: any) { // Type assertion pour error
      console.log('=== ERREUR SERVICE INSCRIPTION ===');
      console.error('Erreur lors de la création de l\'utilisateur:', error);
      console.log('Message d\'erreur:', error.message);
      console.log('Stack trace:', error.stack);
      console.log('=== FIN ERREUR SERVICE INSCRIPTION ===');
      throw createError(`Erreur lors de la création de l'utilisateur: ${error.message || 'Erreur inconnue'}`, 500);
    }
  },

  // Connexion d'un utilisateur existant
  async login(data: LoginData) {
    console.log('=== DÉBUT SERVICE CONNEXION ===');
    const { email, password } = data;
    console.log('Données reçues par le service:', { email, password: '***' });

    // Rechercher l'utilisateur par email
    console.log('Recherche de l\'utilisateur par email:', email);
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
        phoneNumber: true
      }
    });

    if (!user || !user.password) {
      console.log('Utilisateur non trouvé ou mot de passe non défini');
      throw createError('Email ou mot de passe incorrect', 401);
    }

    // Vérifier le mot de passe
    console.log('Vérification du mot de passe pour l\'utilisateur:', user.id);
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      console.log('Mot de passe invalide pour l\'utilisateur:', user.id);
      throw createError('Email ou mot de passe incorrect', 401);
    }

    console.log('Mot de passe valide pour l\'utilisateur:', user.id);

    // Générer un token JWT
    console.log('Génération du token JWT pour l\'utilisateur:', user.id);
    const signOptions: SignOptions = { expiresIn: '24h' };

    const token = jwt.sign(
      {
        id: user.id.toString(),
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        phoneNumber: user.phoneNumber
      },
      config.jwtSecret,
      signOptions
    );

    // Mettre à jour la date de dernière connexion
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() }
    });

    return {
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName
      },
      token
    };
  }
};
