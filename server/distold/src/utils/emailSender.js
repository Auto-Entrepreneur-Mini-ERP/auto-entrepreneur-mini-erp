import { emailTransport } from "../config/emailConfig.js";
import { AppError } from "./errorHandler.js";
export const emailSender = async (senderName, senderEmail, recipient, subject, template) => {
    try {
        await emailTransport.sendMail({
            from: `"${senderName}" <${senderEmail}>`,
            to: recipient,
            subject: subject,
            html: template,
        });
    }
    catch (error) {
        throw new AppError("Error sending Email!", 400);
    }
};
//# sourceMappingURL=emailSender.js.map