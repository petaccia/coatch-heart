import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";
import prisma from "../utils/prisma";
import config from "./index";

// Configuration de Passport pour Google OAuth

passport.use(
  new GoogleStrategy(
    {
      clientID: config.googleClientId,
      clientSecret: config.googleClientSecret,
      callbackURL: config.oauthCallbackUrl,
      scope: ["profile", "email"],
    },
    async (_accessToken, _refreshToken, profile, done) => {
      try {
        // Vérifier si l'utilisateur existe déjà
        const existingUser = await prisma.user.findUnique({
          where: { email: profile.emails?.[0].value },
        });

        if (existingUser) {
          // Mettre à jour la date de dernière connexion
          const updatedUser = await prisma.user.update({
            where: { id: existingUser.id },
            data: { lastLogin: new Date() },
          });

          return done(null, updatedUser);
        }

        // Créer un nouvel utilisateur
        const newUser = await prisma.user.create({
          data: {
            email: profile.emails?.[0].value || `${profile.id}@google.com`,
            firstName: profile.name?.givenName || "",
            lastName: profile.name?.familyName || "",
            profilePicture: profile.photos?.[0].value,
            password: "", // Pas de mot de passe pour les utilisateurs OAuth
            isEmailVerified: true, // L'email est vérifié par Google
            role: "USER",
          },
        });

        return done(null, newUser);
      } catch (error) {
        console.error("Erreur lors de l'authentification Google:", error);
        return done(null, false, {
          message: "Erreur d'authentification Google",
        });
      }
    },
  ),
);

// Configuration de Passport pour Facebook

passport.use(
  new FacebookStrategy(
    {
      clientID: config.facebookClientId,
      clientSecret: config.facebookClientSecret,
      callbackURL: config.facebookCallbackUrl,
      profileFields: ["id", "emails", "name", "picture.type(large)"],
    },
    async (_accessToken, _refreshToken, profile, done) => {
      try {
        const email =
          profile.emails?.[0]?.value || `${profile.id}@facebook.com`;

        // Vérifier si l'utilisateur existe déjà
        const existingUser = await prisma.user.findUnique({
          where: { email },
        });

        if (existingUser) {
          // Mettre à jour la date de dernière connexion
          const updatedUser = await prisma.user.update({
            where: { id: existingUser.id },
            data: { lastLogin: new Date() },
          });

          return done(null, updatedUser);
        }

        // Créer un nouvel utilisateur
        const newUser = await prisma.user.create({
          data: {
            email,
            firstName: profile.name?.givenName || "",
            lastName: profile.name?.familyName || "",
            profilePicture: profile.photos?.[0]?.value,
            password: "", // Pas de mot de passe pour les utilisateurs OAuth
            isEmailVerified: true, // L'email est vérifié par Facebook
            role: "USER",
          },
        });

        return done(null, newUser);
      } catch (error) {
        console.error("Erreur lors de l'authentification Facebook:", error);
        return done(error as Error);
      }
    },
  ),
);

// Sérialisation de l'utilisateur pour la session
// eslint-disable-next-line @typescript-eslint/no-explicit-any
passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

// Désérialisation de l'utilisateur à partir de la session
passport.deserializeUser(async (id: number, done) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

export default passport;
