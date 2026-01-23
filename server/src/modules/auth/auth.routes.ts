import { Router } from "express";
import { authController } from "./auth.controller.js";
import { validate } from "../../middlewares/validation.middleware.js";
import { registerAutoEntrepreneurSchema, 
    loginEntrepreneurSchema, 
    forgotPasswordSchema, 
    resetPasswordSchema } from "./auth.schema.js";
import { isAthenticated, isOwner } from "../../middlewares/auth.middelware.js";

const router = Router();

router.post("/auth/register", validate(registerAutoEntrepreneurSchema), authController.register);
router.post("auth/login", validate(loginEntrepreneurSchema), authController.login);

router.post("auth/forgot-password", isAthenticated, isOwner, validate(forgotPasswordSchema), authController.forgotPassword);
router.post("auth/reset-password", isAthenticated, isOwner, validate(resetPasswordSchema), authController.resetPassword);

router.get("auth/logout/:autoentrepreneurId", isAthenticated, isOwner, authController.logout);

export default router;