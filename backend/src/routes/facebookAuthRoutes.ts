import { Router } from "express";
import passport from "passport";
import jwt, { SignOptions, Secret } from "jsonwebtoken";
import config from "../config";

const router = Router();

// Route pour démarrer l'authentification Facebook
router.get(
  "/facebook",
  (req, res, next) => {
    next();
  },
  passport.authenticate("facebook", { scope: ["email"] }),
);

// Route de callback après l'authentification Facebook
router.get(
  "/facebook/callback",
  (req, res, next) => {
    next();
  },
  passport.authenticate("facebook", {
    session: false,
    failureRedirect: `${config.frontendUrl}/login?error=facebook_auth_failed`,
    failWithError: true,
  }),
  (req, res) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const user = req.user as any;

      if (!user) {
        return res.redirect(`${config.frontendUrl}/login?error=user_not_found`);
      }

      const signOptions: SignOptions = {
        expiresIn: "24h",
      };

      const token = jwt.sign(
        { id: user.id, email: user.email },
        config.jwtSecret as Secret,
        signOptions,
      );

      res.redirect(`${config.frontendUrl}/auth/callback?token=${token}`);
    } catch {
      res.redirect(`${config.frontendUrl}/login?error=token_generation_failed`);
    }
  },
);

export default router;
