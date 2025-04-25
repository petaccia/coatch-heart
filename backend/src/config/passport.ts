import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import prisma from '../utils/prisma';
import config from './index';

// Configuration de Passport pour Google OAuth
console.log('=== CONFIGURATION PASSPORT GOOGLE ===');
console.log('Client ID:', config.googleClientId);
console.log('Client Secret:', config.googleClientSecret ? '***' : 'Non défini');
console.log('Callback URL:', config.oauthCallbackUrl);

passport.use(
  new GoogleStrategy(
    {
      clientID: config.googleClientId,
      clientSecret: config.googleClientSecret,
      callbackURL: config.oauthCallbackUrl,
      scope: ['profile', 'email']
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log('=== TRAITEMENT PROFIL GOOGLE ===');
        console.log('Access Token:', accessToken ? 'Présent' : 'Non présent');
        console.log('Refresh Token:', refreshToken ? 'Présent' : 'Non présent');
        console.log('Google profile:', profile);

        // Vérifier si l'utilisateur existe déjà
        const existingUser = await prisma.user.findUnique({
          where: { email: profile.emails?.[0].value }
        });

        if (existingUser) {
          // Mettre à jour la date de dernière connexion
          const updatedUser = await prisma.user.update({
            where: { id: existingUser.id },
            data: { lastLogin: new Date() }
          });

          return done(null, updatedUser);
        }

        // Créer un nouvel utilisateur
        const newUser = await prisma.user.create({
          data: {
            email: profile.emails?.[0].value || `${profile.id}@google.com`,
            firstName: profile.name?.givenName || '',
            lastName: profile.name?.familyName || '',
            profilePicture: profile.photos?.[0].value,
            password: '', // Pas de mot de passe pour les utilisateurs OAuth
            isEmailVerified: true, // L'email est vérifié par Google
            role: 'USER'
          }
        });

        return done(null, newUser);
      } catch (error) {
        console.log('=== ERREUR AUTHENTIFICATION GOOGLE ===');
        console.error('Erreur lors de l\'authentification Google:', error);
        console.log('Message d\'erreur:', (error as Error).message);
        console.log('Stack trace:', (error as Error).stack);
        return done(null, false, { message: 'Erreur d\'authentification Google' });
      }
    }
  )
);

// Configuration de Passport pour Facebook
console.log('=== CONFIGURATION PASSPORT FACEBOOK ===');
console.log('Client ID:', config.facebookClientId);
console.log('Client Secret:', config.facebookClientSecret ? '***' : 'Non défini');
console.log('Callback URL:', config.facebookCallbackUrl);

passport.use(
  new FacebookStrategy(
    {
      clientID: config.facebookClientId,
      clientSecret: config.facebookClientSecret,
      callbackURL: config.facebookCallbackUrl,
      profileFields: ['id', 'emails', 'name', 'picture.type(large)']
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log('=== TRAITEMENT PROFIL FACEBOOK ===');
        console.log('Access Token:', accessToken ? 'Présent' : 'Non présent');
        console.log('Facebook profile:', profile);

        const email = profile.emails?.[0]?.value || `${profile.id}@facebook.com`;

        // Vérifier si l'utilisateur existe déjà
        const existingUser = await prisma.user.findUnique({
          where: { email }
        });

        if (existingUser) {
          // Mettre à jour la date de dernière connexion
          const updatedUser = await prisma.user.update({
            where: { id: existingUser.id },
            data: { lastLogin: new Date() }
          });

          return done(null, updatedUser);
        }

        // Créer un nouvel utilisateur
        const newUser = await prisma.user.create({
          data: {
            email,
            firstName: profile.name?.givenName || '',
            lastName: profile.name?.familyName || '',
            profilePicture: profile.photos?.[0]?.value,
            password: '', // Pas de mot de passe pour les utilisateurs OAuth
            isEmailVerified: true, // L'email est vérifié par Facebook
            role: 'USER'
          }
        });

        return done(null, newUser);
      } catch (error) {
        console.error('Erreur lors de l\'authentification Facebook:', error);
        return done(error as Error);
      }
    }
  )
);

// Sérialisation de l'utilisateur pour la session
passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

// Désérialisation de l'utilisateur à partir de la session
passport.deserializeUser(async (id: number, done) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id }
    });
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

export default passport;
