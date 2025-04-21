import dotenv from 'dotenv';

// Charger les variables d'environnement
dotenv.config();

import { SignOptions } from 'jsonwebtoken';

const config = {
  port: process.env.PORT || 3001,
  jwtSecret: process.env.JWT_SECRET || 'default_jwt_secret',
  jwtExpiresIn: '1d' as const,
  bcryptSaltRounds: 10
};

export default config;
