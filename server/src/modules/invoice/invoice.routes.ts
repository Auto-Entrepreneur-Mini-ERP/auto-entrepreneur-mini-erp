import { Router } from "express";
import { isAthenticated, isOwner } from "../../middlewares/auth.middelware.js";
import { validate } from "../../middlewares/validation.middleware.js";
import { invoiceController } from "./invoice.controller.js";

const router = Router();

router.get('/auto-entrepreneur/:autoentrepreneurId/invoice', isAthenticated, isOwner, invoiceController.getInvoices);
router.get('/auto-entrepreneur/:autoentrepreneurId/invoice/:invoiceId', isAthenticated, isOwner, invoiceController.getOneInvoice);

export default router;