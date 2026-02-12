import { Router } from "express";
import { taxDeclartaionController } from "./taxDeclaration.controller.js";
 import { validate } from "../../middlewares/validation.middleware.js";

import {
  createTaxDeclarationRoute,
  updateTaxDeclarationRoute,
} from "./taxDeclaration.schema.js";

const router = Router();
router.get("/taxDeclarations", taxDeclartaionController.getAllTaxDeclartion);

router.post(
  "/taxDeclarations",
  validate(createTaxDeclarationRoute),
  taxDeclartaionController.createTaxDeclaration,
);
 
router.patch(
  "/taxDeclarations/:id",
  validate(updateTaxDeclarationRoute),
  taxDeclartaionController.patchTaxDeclaration,
);

router.get(
  "/taxDeclarations/:id",

  taxDeclartaionController.getTaxDeclaration,
); 

router.delete(
  "/taxDeclarations/:id",
  taxDeclartaionController.deleteTaxDeclaration,
); 


export default router;
