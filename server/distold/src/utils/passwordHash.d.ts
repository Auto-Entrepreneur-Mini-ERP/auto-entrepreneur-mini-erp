import type { loginSchemaInput, registerSchemaInput } from '../modules/auth/auth.types.js';
import type { AutoEntrepreneur } from '../modules/auto-entrepreneur/auto-entrepreneur.types.js';
declare const passwordHash: (password: registerSchemaInput["password"]) => Promise<string>;
declare const passwordMatch: (password: loginSchemaInput["password"], hashedPassword: AutoEntrepreneur["password"]) => Promise<boolean>;
export { passwordHash, passwordMatch };
//# sourceMappingURL=passwordHash.d.ts.map