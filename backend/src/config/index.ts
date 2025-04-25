import dotenv from 'dotenv';

// Charger les variables d'environnement
dotenv.config();

import { SignOptions } from 'jsonwebtoken';

const config = {
  port: process.env.PORT || 3001,
  jwtSecret: process.env.JWT_SECRET || 'default_jwt_secret',
  jwtExpiresIn: '1d' as const,
  bcryptSaltRounds: 10,
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
  googleClientId: process.env.GOOGLE_CLIENT_ID || '',
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
  oauthCallbackUrl: process.env.OAUTH_CALLBACK_URL || 'http://localhost:3001/api/auth/google/callback',
  facebookClientId: process.env.FACEBOOK_CLIENT_ID || '',
  facebookClientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',
  facebookCallbackUrl: process.env.FACEBOOK_CALLBACK_URL || 'http://localhost:3001/api/auth/facebook/callback'
};

export default config;
