import bcrypt from 'bcrypt';
import type { loginSchemaInput, registerSchemaInput } from '../modules/auth/auth.types.js';
import type { AutoEntrepreneur } from '../modules/auto-entrepreneur/auto-entrepreneur.types.js';

const passwordHash = async (password: registerSchemaInput['password']) => {
    const salt = await bcrypt.genSalt(10);

    return bcrypt.hash(password, salt);
}

const passwordMatch = async (password: loginSchemaInput['password'], hashedPassword: AutoEntrepreneur['password']) => {
    return bcrypt.compare(password, hashedPassword as string);
}

export {
    passwordHash,
    passwordMatch
}