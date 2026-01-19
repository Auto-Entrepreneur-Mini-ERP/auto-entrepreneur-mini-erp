import { Router } from "express";
import { autoEntrepreneurController } from "./auto-entrepreneur.controller.js";
import { isAthenticated } from "../../middlewares/auth.middelware.js";

const router = Router();

router.get("/profile", isAthenticated, autoEntrepreneurController.getProfile);


export default router;