import { Router } from "express";
import { autoEntrepreneurController } from "./auto-entrepreneur.controller.js";
import { isAthenticated } from "../../middlewares/auth.middelware.js";

const router = Router();


router.get("/profile", autoEntrepreneurController.getProfile);
router.put("/profile", autoEntrepreneurController.editProfile);


export default router;