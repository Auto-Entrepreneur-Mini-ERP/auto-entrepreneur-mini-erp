import { Router } from "express";
import { isAthenticated, isOwner } from "../../middlewares/auth.middelware.js"
import { paymentController } from "./payment.controller.js";
import { validate } from "../../middlewares/validation.middleware.js";
import { paymentCreateSchemaInput, paymentUpdateSchemaInput } from "./payment.schema.js";

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

router.put("/auto-entrepreneur/:autoentrepreneurId/payment/:paymentId",
    isAthenticated,
    isOwner,
    validate(paymentUpdateSchemaInput),
    paymentController.updatePayment
);

router.delete("/auto-entrepreneur/:autoentrepreneurId/payment/:paymentId",
    isAthenticated,
    isOwner,
    paymentController.deletePayment
);


router.get("/auto-entrepreneur/:autoentrepreneurId/payment/:paymentId/recu",
    isAthenticated,
    isOwner,
    paymentController.getPaymentById
);

router.get("/auto-entrepreneur/:autoentrepreneurId/payment/:paymentId/repprocher",
    isAthenticated,
    isOwner,
    paymentController.reconciliatePayment
);
export default router;