import { Router } from "express";
import { autoEntrepreneurController } from "./auto-entrepreneur.controller.js";
import { isAthenticated, isOwner } from "../../middlewares/auth.middelware.js";

const router = Router();


router.get("/profile/:autoentrepreneurId", isAthenticated, isOwner, autoEntrepreneurController.getProfile);
router.put("/profile/:autoentrepreneurId", isAthenticated, isOwner, autoEntrepreneurController.editProfile);


export default router;