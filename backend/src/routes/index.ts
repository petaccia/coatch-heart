import { Router } from "express";
import authRoutes from "./authRoutes";
import googleAuthRoutes from "./googleAuthRoutes";
import facebookAuthRoutes from "./facebookAuthRoutes";
import { authenticateJWT } from "../middlewares/auth"; // Import ajouté

const router = Router();

// Routes publiques
router.use("/auth", authRoutes);
router.use("/auth", googleAuthRoutes);
router.use("/auth", facebookAuthRoutes);

// Routes protégées avec JWT
const protectedRouter = Router();
protectedRouter.use(authenticateJWT);

// Ajouter ici les routes protégées
// protectedRouter.get('/profile', ...);

router.use("/api", protectedRouter);

export default router;
