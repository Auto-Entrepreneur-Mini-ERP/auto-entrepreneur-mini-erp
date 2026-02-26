import type { loginSchemaInput, registerSchemaInput, resetPasswordInput } from "./auth.types.js";
import type { AutoEntrepreneur } from "../auto-entrepreneur/auto-entrepreneur.types.js";
export declare const authService: {
    createAutoEntrepreneur: (data: registerSchemaInput) => Promise<AutoEntrepreneur>;
    loginAutoEntrepreneur: (data: loginSchemaInput) => Promise<AutoEntrepreneur>;
    forgotPassword: (email: string) => Promise<boolean>;
    otpVerification: (email: string, otp: string) => Promise<void>;
    resetPassword: (id: string, data: resetPasswordInput) => Promise<boolean>;
    logout: (id: string) => Promise<boolean>;
};
//# sourceMappingURL=auth.service.d.ts.map