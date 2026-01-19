import { Router } from "express";
import { autoEntrepreneurController } from "./auto-entrepreneur.controller.js";
import { isAthenticated } from "../../middlewares/auth.middelware.js";

const router = Router();

router.get("/profile/:id", isAthenticated, autoEntrepreneurController.getProfile);
router.put("/profile/:id", isAthenticated, autoEntrepreneurController.editProfile);


export default router;