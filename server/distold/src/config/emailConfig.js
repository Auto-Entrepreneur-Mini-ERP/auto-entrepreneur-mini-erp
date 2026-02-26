import nodemailer from 'nodemailer';
import { env } from './env.js';
// Looking to send emails in production? Check out our Email API/SMTP product!
export const emailTransport = nodemailer.createTransport({
    host: env.EMAIL_HOST,
    port: 2525,
    auth: {
        user: env.EMAIL_USER,
        pass: env.EMAIL_PASSWORD
    }
});
//# sourceMappingURL=emailConfig.js.map