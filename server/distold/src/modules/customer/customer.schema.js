import { z } from "zod";
const baseUserSchema = z.object({
    firstName: z.string().min(2, "First name is too short"),
    lastName: z.string().min(2, "Last name is too short"),
    email: z.string().email("Invalid email format"),
    phone: z.string().min(10, "Invalid phone number"),
    address: z.string().min(5, "Address is required"),
});
const baseCustomerSchema = z.object({
    user: baseUserSchema,
    ice: z.string().length(15, "ICE must be exactly 15 characters"),
    city: z.string().min(1, "City is required"),
    country: z.string().min(1, "Country is required"),
    isActive: z.boolean(),
    AutoEntrepreneurId: z.string().min(1, "Auto Entrepreneur ID is required"),
});
export const createCustomerSchema = {
    body: baseCustomerSchema
        .extend({
        city: baseCustomerSchema.shape.city.optional(),
        country: baseCustomerSchema.shape.country.default("Morocco"),
        isActive: baseCustomerSchema.shape.isActive.default(true),
        AutoEntrepreneurId: baseCustomerSchema.shape.city.optional()
    })
        .strict(),
};
export const patchCustomerSchema = {
    body: baseCustomerSchema
        .partial()
        .strict()
        .refine((data) => Object.keys(data).length > 0, {
        message: "At least one field must be provided",
    })
        .refine((data) => !data.user || Object.keys(data.user).length > 0, {
        message: "User object cannot be empty",
        path: ["user"],
    }),
};
//# sourceMappingURL=customer.schema.js.map