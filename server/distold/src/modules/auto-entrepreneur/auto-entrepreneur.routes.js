import { Router } from "express";
import { autoEntrepreneurController } from "./auto-entrepreneur.controller.js";
import { validateBody } from "../../middlewares/validation.middleware.js";
import { modifyAutoEntrepreneurSchema } from "./auto-entrepreneur.schema.js";
import { upload } from "../../middlewares/fileUpload.middleware.js";
const router = Router();
router.get("/profile", autoEntrepreneurController.getProfile);
router.put("/profile", upload.single("profile-photo"), 
// validateBody(modifyAutoEntrepreneurSchema), 
autoEntrepreneurController.editProfile);
export default router;
//# sourceMappingURL=auto-entrepreneur.routes.js.map