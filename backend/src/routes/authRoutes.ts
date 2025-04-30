import { Router } from "express";
import { authController } from "../controllers/authController";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

// Utiliser le wrapper asyncHandler pour gérer les erreurs
router.post("/signup", asyncHandler(authController.signup));

// Utiliser le wrapper asyncHandler pour gérer les erreurs
router.post("/login", asyncHandler(authController.login));

export default router;
