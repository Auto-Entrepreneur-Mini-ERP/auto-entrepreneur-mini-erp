import { Router } from "express";
import { isAthenticated, isOwner } from "../../middlewares/auth.middelware.js"
import { paymentController } from "./payment.controller.js";
import { validate } from "../../middlewares/validation.middleware.js";
import { paymentCreateSchemaInput } from "./payment.schema.js";

const router = Router();

router.get("/auto-entrepreneur/:autoentrepreneurId/payment",
    isAthenticated,
    isOwner,
    paymentController.getAllPayments
);

router.get("/auto-entrepreneur/:autoentrepreneurId/payment/:paymentId",
    isAthenticated,
    isOwner,
    paymentController.getPaymentById
);

router.post("/auto-entrepreneur/:autoentrepreneurId/payment/",
    isAthenticated,
    isOwner,
    validate(paymentCreateSchemaInput),
    paymentController.createPayment
);

router.delete("/auto-entrepreneur/:autoentrepreneurId/payment/:paymentId",
    isAthenticated,
    isOwner,
    paymentController.deletePayment
);

export default router;