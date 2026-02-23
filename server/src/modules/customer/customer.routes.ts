import { Router } from "express";
import { customerController } from "./customer.controller.js";
 import { isAthenticated } from "../../middlewares/auth.middelware.js";
import { validateBody } from "../../middlewares/validation.middleware.js";

import {
  createCustomerSchema,
  patchCustomerSchema,
} from "./customer.schema.js";


const router = Router();
router.get("/customers",customerController.getAllCustomers);

router.post(
  "/customers",
  validateBody(createCustomerSchema),
  customerController.createCustomer,
);

 router.patch(
   "/customers/:id",
   validateBody(patchCustomerSchema),
   customerController.updateCustomer,
 );
 
 router.get(
  "/customers/:id",   
   
  customerController.getCustomer,
);

 router.get(
  "/customers",   
  customerController.getCustomerByName,
);

 router.delete("/customers/:id", customerController.deleteCustomer);
 
 router.get(
   "/customers/:id/invoices",
   customerController.getAllInvoices,
);
 
 router.get("/customers/:id/quotes", customerController.getAllQuotes);
export default router;
