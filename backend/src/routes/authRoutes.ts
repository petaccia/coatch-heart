import { Router } from "express";
import { authController } from "../controllers/authController";
import { GoogleAuthController } from "../controllers/socialAuth/googleAuthController";
import { FacebookAuthController } from "../controllers/socialAuth/facebookAuthController";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

const googleAuthController = new GoogleAuthController();
const facebookAuthController = new FacebookAuthController();

// Routes d'authentification sociale
router.get('/google', asyncHandler(googleAuthController.authHandler()));
router.get('/google/callback', asyncHandler(googleAuthController.callbackHandler()), asyncHandler(googleAuthController.handleSocialAuthSuccess));
router.get('/facebook', asyncHandler(facebookAuthController.authHandler()));
router.get('/facebook/callback', asyncHandler(facebookAuthController.callbackHandler()), asyncHandler(facebookAuthController.handleSocialAuthSuccess));

// Routes d'authentification standard
router.post("/signup", asyncHandler(authController.signup));
router.post("/login", asyncHandler(authController.login));

export default router;
