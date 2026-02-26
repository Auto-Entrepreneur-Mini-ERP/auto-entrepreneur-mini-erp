import cron from 'node-cron';
import { prisma } from '../../lib/prisma.js';
import { notificationService } from './notification.service.js';
import { InvoiceStatus, PaymentStatus } from '../../../generated/prisma/enums.js';
const TAX_WARNING_DAYS = 7;
const CNSS_WARNING_DAYS = 15;
export const registerNotificationCrons = () => {
    // Daily: Upcoming tax declarations (impôts -7 days)
    cron.schedule('0 8 * * *', async () => {
        const now = new Date();
        const target = new Date(now);
        target.setDate(target.getDate() + TAX_WARNING_DAYS);
        const declarations = await prisma.taxDeclaration.findMany({
            where: {
                status: { in: ['DRAFT', 'PENDING'] },
                dueDate: {
                    gte: new Date(target.toDateString()),
                    lte: new Date(new Date(target.toDateString()).getTime() + 86400000),
                },
            },
        });
        for (const decl of declarations) {
            await notificationService.createEcheanceNotification(decl.AutoEntrepreneurId, 'tax', decl.id, `Déclaration ${decl.period} ${decl.year}`, TAX_WARNING_DAYS);
        }
    });
    // Daily: Upcoming CNSS contributions (-15 days)
    cron.schedule('0 8 * * *', async () => {
        const now = new Date();
        const target = new Date(now);
        target.setDate(target.getDate() + CNSS_WARNING_DAYS);
        const contributions = await prisma.contribution.findMany({
            where: {
                status: PaymentStatus.PENDING,
                dueDate: {
                    gte: new Date(target.toDateString()),
                    lte: new Date(new Date(target.toDateString()).getTime() + 86400000),
                },
            },
        });
        for (const contrib of contributions) {
            await notificationService.createEcheanceNotification(contrib.AutoEntrepreneurId, 'contribution', contrib.id, `Cotisation CNSS ${contrib.period} ${contrib.year}`, CNSS_WARNING_DAYS);
        }
    });
    // Weekly: Overdue invoices
    cron.schedule('0 9 * * 1', async () => {
        const overdueInvoices = await prisma.invoice.findMany({
            where: {
                status: InvoiceStatus.OVERDUE,
            },
        });
        for (const invoice of overdueInvoices) {
            await notificationService.createRetardNotification(invoice.AutoEntrepreneurId, 'invoice', invoice.id, `Facture ${invoice.invoiceNumber}`);
        }
    });
};
//# sourceMappingURL=notification.cron.js.map