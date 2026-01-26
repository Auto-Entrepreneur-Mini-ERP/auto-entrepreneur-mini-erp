import { Router } from "express";
import { isAthenticated, isOwner } from "../../middlewares/auth.middelware.js"
import { paymentController } from "./payment.controller.js";

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

export default router;