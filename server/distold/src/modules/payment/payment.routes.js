import { Router } from "express";
import { paymentController } from "./payment.controller.js";
import { validateBody, validateQuery } from "../../middlewares/validation.middleware.js";
import { paymentCreateSchemaInput, paymentStatsSchemaQuery, paymentUpdateSchemaInput } from "./payment.schema.js";
const router = Router();
router.get("/payment", paymentController.getAllPayments);
router.get("/payment/:paymentId", paymentController.getPaymentById);
router.post("/payment", validateBody(paymentCreateSchemaInput), paymentController.createPayment);
router.put("/payment/:paymentId", validateBody(paymentUpdateSchemaInput), paymentController.updatePayment);
router.delete("/payment/:paymentId", paymentController.deletePayment);
router.get("/payment/:paymentId/recu", paymentController.getPaymentById);
router.get("/payment/:paymentId/rapprocher", paymentController.reconciliatePayment);
router.get("/payment/stats", validateQuery(paymentStatsSchemaQuery), paymentController.paymentStats);
export default router;
//# sourceMappingURL=payment.routes.js.map