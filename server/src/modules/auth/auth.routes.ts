import { Router } from "express";
import { authController } from "./auth.controller.js";
import { validateBody } from "../../middlewares/validation.middleware.js";
import { registerAutoEntrepreneurSchema, 
    loginEntrepreneurSchema, 
    forgotPasswordSchema, 
    resetPasswordSchema, 
    otpVerificationSchema} from "./auth.schema.js";
import { isAthenticated } from "../../middlewares/auth.middelware.js";

const router = Router();

router.post("/auth/register", validateBody(registerAutoEntrepreneurSchema), authController.register);
router.post("/auth/login", validateBody(loginEntrepreneurSchema), authController.login);

router.post("/auth/forgot-password", isAthenticated, validateBody(forgotPasswordSchema), authController.forgotPassword);
router.post("/auth/otp-verification", isAthenticated, validateBody(otpVerificationSchema), authController.otpVerify);
router.post("/auth/reset-password", isAthenticated, validateBody(resetPasswordSchema), authController.resetPassword);

router.get("/auth/logout/:autoentrepreneurId", isAthenticated, authController.logout);

export default router;