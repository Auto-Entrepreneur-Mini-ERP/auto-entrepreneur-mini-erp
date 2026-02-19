import { Router } from "express";
import { productController } from "./product.controller.js";
import { isAthenticated } from "../../../middlewares/auth.middelware.js";

const router = Router();

router.use(isAthenticated);

router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);
router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.patch("/:id/stock", productController.updateStock);
router.delete("/:id", productController.deleteProduct);

export default router;
