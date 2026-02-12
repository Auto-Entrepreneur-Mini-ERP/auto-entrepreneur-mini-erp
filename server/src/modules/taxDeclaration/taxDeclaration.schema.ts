import { z } from "zod";

 
export const createTaxDeclarationSchema =  z
  .object({
    period: z.string(),
    year: z.number().int().min(2000).max(new Date().getFullYear()),

    month: z.number().int().min(1).max(12).optional().nullable(),
  })
   
 
export const patchTaxDeclarationSchema = createTaxDeclarationSchema.partial();

 
export const createTaxDeclarationRoute = {
  body: createTaxDeclarationSchema,
};

export const updateTaxDeclarationRoute = {
  body: patchTaxDeclarationSchema,
};
 
export type CreateTaxDeclarationDTO = z.infer<
  typeof createTaxDeclarationSchema
>;

export type PatchTaxDeclarationDTO = z.infer<typeof patchTaxDeclarationSchema>;
