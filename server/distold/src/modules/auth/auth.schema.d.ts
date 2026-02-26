import { z } from 'zod';
export declare const registerAutoEntrepreneurSchema: {
    body: z.ZodObject<{
        firstName: z.ZodString;
        lastName: z.ZodString;
        email: z.ZodEmail;
        businessName: z.ZodString;
        activityType: z.ZodEnum<{
            COMMERCE: "COMMERCE";
            SERVICE: "SERVICE";
            MIXTE: "MIXTE";
        }>;
        ice: z.ZodString;
        password: z.ZodString;
        passwordConfirmation: z.ZodString;
    }, z.core.$strip>;
};
export declare const loginEntrepreneurSchema: {
    body: z.ZodObject<{
        email: z.ZodEmail;
        password: z.ZodString;
    }, z.core.$strip>;
};
export declare const forgotPasswordSchema: {
    body: z.ZodObject<{
        email: z.ZodEmail;
    }, z.core.$strip>;
};
export declare const otpVerificationSchema: {
    body: z.ZodObject<{
        otp: z.ZodNonOptional<z.ZodNumber>;
    }, z.core.$strip>;
};
export declare const resetPasswordSchema: {
    body: z.ZodObject<{
        password: z.ZodString;
        passwordConfirmation: z.ZodString;
    }, z.core.$strip>;
};
//# sourceMappingURL=auth.schema.d.ts.map