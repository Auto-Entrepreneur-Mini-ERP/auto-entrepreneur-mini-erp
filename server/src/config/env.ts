import dotenv from 'dotenv';
dotenv.config()

export const env = {
    PORT: process.env.SERVER_PORT || 3001,

    // JWT Secret
    JWT_SECRET: process.env.JWT_SECRET || "super_secret_key_123"
}