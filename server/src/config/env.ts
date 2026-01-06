import dotenv from 'dotenv'

dotenv.config()

export const env = {
    PORT: process.env.SERVER_PORT || 3001,
}