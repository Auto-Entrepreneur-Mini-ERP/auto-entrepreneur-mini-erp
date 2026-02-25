import { Router } from "express";
import { documentController } from "./document.controller.js";

import { upload } from "../../middlewares/fileUpload.middleware.js";
import { validateBody } from "../../middlewares/validation.middleware.js";
import { documentCreateSchemaInput, documentUpdateSchemaInput } from "./document.schema.js";

const router = Router();

router.get('/document', documentController.getAllDocuments);
router.get('/document/:documentId', documentController.getOneDocument);
router.post('/document', upload.single('document'), validateBody(documentCreateSchemaInput), documentController.createDocument);
router.put('/document/:documentId', validateBody(documentUpdateSchemaInput), documentController.updateDocument);
router.delete('/document/:documentId', documentController.deleteDocument);

export default router;