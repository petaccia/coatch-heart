import { Router } from "express";
import authRoutes from "./authRoutes";
import { authenticateJWT } from "../middlewares/auth"; // Import ajouté
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

// Routes publiques
router.use("/auth", authRoutes);

// Routes protégées avec JWT
const protectedRouter = Router();

// Utiliser le wrapper asyncHandler pour gérer les erreurs
protectedRouter.use(asyncHandler(authenticateJWT));

// Ajouter ici les routes protégées
// protectedRouter.get('/profile', ...);

router.use("/api", protectedRouter);

export default router;
