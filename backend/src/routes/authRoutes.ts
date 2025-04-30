import { Router, Request, Response, NextFunction } from "express";
import { authController } from "../controllers/authController";

const router = Router();

// Route d'inscription
router.post("/signup", (req: Request, res: Response, next: NextFunction) => {
  authController.signup(req, res, next);
});

// Route de connexion
router.post("/login", (req: Request, res: Response, next: NextFunction) => {
  authController.login(req, res, next);
});

export default router;
