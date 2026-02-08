import { Router } from "express";
import { documentController } from "./document.controller.js";

import { upload } from "../../middlewares/fileUpload.middleware.js";

const router = Router();

router.get('/document', documentController.getAllDocuments);
router.get('/document/:documentId', documentController.getOneDocument);
router.post('/document', upload.single('document'), documentController.createDocument);
router.put('/document/:documentId', documentController.getAllDocuments);
router.delete('/document/:documentId', documentController.getAllDocuments);

export default router;