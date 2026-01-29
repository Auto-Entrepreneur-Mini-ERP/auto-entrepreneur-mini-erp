import { Router } from "express";
import { isAthenticated } from "../../middlewares/auth.middelware.js"
import { paymentController } from "./payment.controller.js";
import { validate } from "../../middlewares/validation.middleware.js";
import { paymentCreateSchemaInput, paymentUpdateSchemaInput } from "./payment.schema.js";

const router = Router();

router.get("/payment",
    paymentController.getAllPayments
);

router.get("/payment/:paymentId",
    paymentController.getPaymentById
);

router.post("/payment",
    validate(paymentCreateSchemaInput),
    paymentController.createPayment
);

router.put("/payment/:paymentId",
    validate(paymentUpdateSchemaInput),
    paymentController.updatePayment
);

router.delete("/payment/:paymentId",
    paymentController.deletePayment
);


router.get("/payment/:paymentId/recu",
    paymentController.getPaymentById
);

router.get("/payment/:paymentId/repprocher",
    paymentController.reconciliatePayment
);
export default router;