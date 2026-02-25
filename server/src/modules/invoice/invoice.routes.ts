import { Router } from "express";
import { validateBody } from "../../middlewares/validation.middleware.js";
import { invoiceController } from "./invoice.controller.js";
import { createInvoiceSchema, updateInvoiceSchema } from "./invoice.schema.js";

const router = Router();


router.get('/invoice',
    invoiceController.getInvoices
);

router.get('/invoice/search/:invoiceNumber',
    invoiceController.getInvoicesByNumber
);

router.get('/invoice/:invoiceId',
    invoiceController.getOneInvoice
);

router.post('/invoice',
    // validateBody(createInvoiceSchema),
    invoiceController.createInvoice
);

router.put('/invoice/:invoiceId',
    // validateBody(updateInvoiceSchema),
    invoiceController.editInvoice
);

router.get('/invoice/:invoiceId/cancel',
    invoiceController.cancelInvoice
);

router.delete('/invoice/:invoiceId',
    invoiceController.deleteInvoice
);

router.get('/invoice/:invoiceId/download',
    invoiceController.downloadInvoice
);

router.get('/invoice/:invoiceId/export-excel',
    invoiceController.getOneInvoice
);

router.get('/invoice/:invoiceId/envoyer',
    invoiceController.getOneInvoice
);


export default router;