import { Router } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import config from "../config";

const router = Router();

// Route pour démarrer l'authentification Google
router.get(
  "/google",
  (req, res, next) => {
    next();
  },
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

// Route de callback après l'authentification Google
router.get(
  "/google/callback",
  (req, res, next) => {
    next();
  },
  passport.authenticate("google", {
    session: false,
    failureRedirect: `${config.frontendUrl}/login?error=google_auth_failed`,
    failWithError: true,
  }),
  (req, res) => {
    try {
      // L'utilisateur est authentifié, générer un JWT
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const user = req.user as any;

      if (!user) {
        return res.redirect(`${config.frontendUrl}/login?error=user_not_found`);
      }

      const token = jwt.sign(
        {
          id: user.id.toString(),
          email: user.email,
          role: user.role,
          firstName: user.firstName,
          lastName: user.lastName,
          phoneNumber: user.phoneNumber,
        },
        config.jwtSecret as jwt.Secret,
        { expiresIn: config.jwtExpiresIn },
      );

      // Rediriger vers le frontend avec le token
      res.redirect(`${config.frontendUrl}/auth/callback?token=${token}`);
    } catch (error) {
      console.error("Erreur lors de la génération du token:", error);
      res.redirect(`${config.frontendUrl}/login?error=token_generation_failed`);
    }
  },
);

export default router;
