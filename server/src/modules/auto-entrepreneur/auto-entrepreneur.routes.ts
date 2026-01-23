import { Router } from "express";
import { autoEntrepreneurController } from "./auto-entrepreneur.controller.js";
import { isAthenticated, isOwner } from "../../middlewares/auth.middelware.js";

const router = Router();

router.get("/profile/:id", isAthenticated, isOwner, autoEntrepreneurController.getProfile);
router.put("/profile/:id", isAthenticated, isOwner, autoEntrepreneurController.editProfile);


export default router;