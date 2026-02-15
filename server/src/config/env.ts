import dotenv from 'dotenv'

dotenv.config()

export const env = {
    PORT: process.env.SERVER_PORT || 3001,
    FRONT_END_URL: process.env.FRONT_END_URL,

    // JWT Secret
    JWT_SECRET: process.env.JWT_SECRET,

    // SMTP EMAIL VARS
    EMAIL_HOST: process.env.EMAIL_HOST,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    
}