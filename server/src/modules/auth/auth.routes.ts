import { Router } from "express";
import { authController } from "./auth.controller.js";
import { validate } from "../../middlewares/validation.middleware.js";
import { registerAutoEntrepreneurSchema, 
    loginEntrepreneurSchema, 
    forgotPasswordSchema, 
    resetPasswordSchema, 
    otpVerificationSchema} from "./auth.schema.js";
import { isAthenticated } from "../../middlewares/auth.middelware.js";

const router = Router();

router.post("/auth/register", validate(registerAutoEntrepreneurSchema), authController.register);
router.post("/auth/login", validate(loginEntrepreneurSchema), authController.login);

router.post("/auth/forgot-password", isAthenticated, validate(forgotPasswordSchema), authController.forgotPassword);
router.post("/auth/otp-verification", isAthenticated, validate(otpVerificationSchema), authController.otpVerify);
router.post("/auth/reset-password", isAthenticated, validate(resetPasswordSchema), authController.resetPassword);

router.get("/auth/logout/:autoentrepreneurId", isAthenticated, authController.logout);

export default router;