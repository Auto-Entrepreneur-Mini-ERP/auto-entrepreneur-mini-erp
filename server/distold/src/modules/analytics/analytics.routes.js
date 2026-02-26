import { Router } from "express";
import { analyticsController } from "./analytics.controller.js";
const router = Router();
router.get('/analytics/overview', analyticsController.overview);
router.get('/analytics/monthly-revenues', analyticsController.monthlyRevenues);
router.get('/analytics/monthly-depenses', analyticsController.monthlyDepenses);
router.get('/analytics/recents', analyticsController.recents);
export default router;
//# sourceMappingURL=analytics.routes.js.map