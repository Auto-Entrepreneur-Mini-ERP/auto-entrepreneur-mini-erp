import { Router } from "express";
import { isAthenticated, isOwner } from "../../middlewares/auth.middelware.js";
import { validate } from "../../middlewares/validation.middleware.js";
import { invoiceController } from "./invoice.controller.js";
import { createInvoiceSchema, updateInvoiceSchema } from "./invoice.schema.js";

const router = Router();

router.get('/auto-entrepreneur/:autoentrepreneurId/invoice',
    isAthenticated,
    isOwner,
    invoiceController.getInvoices
);

router.get('/auto-entrepreneur/:autoentrepreneurId/invoice/:invoiceId',
    isAthenticated,
    isOwner,
    invoiceController.getOneInvoice
);

router.post('/auto-entrepreneur/:autoentrepreneurId/invoice',
    isAthenticated,
    isOwner,
    validate(createInvoiceSchema),
    invoiceController.createInvoice
);

router.put('/auto-entrepreneur/:autoentrepreneurId/invoice/:invoiceId',
    isAthenticated,
    isOwner,
    validate(updateInvoiceSchema),
    invoiceController.editInvoice
);

router.get('/auto-entrepreneur/:autoentrepreneurId/invoice/:invoiceId/cancel',
    isAthenticated,
    isOwner,
    invoiceController.cancelInvoice
);

router.delete('/auto-entrepreneur/:autoentrepreneurId/invoice/:invoiceId',
    isAthenticated,
    isOwner,
    invoiceController.deleteInvoice
);

router.get('/auto-entrepreneur/:autoentrepreneurId/invoice/:invoiceId/pdf',
    isAthenticated,
    isOwner,
    invoiceController.getOneInvoice
);

router.get('/auto-entrepreneur/:autoentrepreneurId/invoice/:invoiceId/export-excel',
    isAthenticated,
    isOwner,
    invoiceController.getOneInvoice
);

router.get('/auto-entrepreneur/:autoentrepreneurId/invoice/:invoiceId/envoyer',
    isAthenticated,
    isOwner,
    invoiceController.getOneInvoice
);


export default router;