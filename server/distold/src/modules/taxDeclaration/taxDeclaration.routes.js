import { Router } from "express";
import { taxDeclartaionController } from "./taxDeclaration.controller.js";
import { validateBody } from "../../middlewares/validation.middleware.js";
import { createTaxDeclarationRoute, updateTaxDeclarationRoute, } from "./taxDeclaration.schema.js";
const router = Router();
router.get("/taxDeclarations", taxDeclartaionController.getAllTaxDeclartion);
router.post("/taxDeclarations", validateBody(createTaxDeclarationRoute), taxDeclartaionController.createTaxDeclaration);
router.patch("/taxDeclarations/:id", validateBody(updateTaxDeclarationRoute), taxDeclartaionController.patchTaxDeclaration);
router.get("/taxDeclarations/current", taxDeclartaionController.getCurrentTaxDeclarationInfo);
router.get("/taxDeclarations/:id", taxDeclartaionController.getTaxDeclaration);
router.delete("/taxDeclarations/:id", taxDeclartaionController.deleteTaxDeclaration);
router.get("/taxDeclarations/current", taxDeclartaionController.getCurrentTaxDeclarationInfo);
export default router;
//# sourceMappingURL=taxDeclaration.routes.js.map