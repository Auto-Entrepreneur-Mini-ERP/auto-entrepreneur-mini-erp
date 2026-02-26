import { InvoiceStatus } from "../../invoice/invoice.types.js";
import { prisma } from "../../../lib/prisma.js";
export const calculateTotalRevenue = async (autoEntrepreneurId, year, month) => {
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0, 23, 59, 59);
    const result = await prisma.invoice.aggregate({
        where: {
            AutoEntrepreneurId: autoEntrepreneurId,
            status: {
                in: [InvoiceStatus.PAID, InvoiceStatus.PARTIALLY_PAID],
            },
            issueDate: {
                gte: startDate,
                lte: endDate,
            },
        },
        _sum: {
            paidAmount: true,
        },
    });
    const paidAmount = result._sum.paidAmount ?? 0;
    return Number(paidAmount);
};
const getTaxRate = async (autoId) => {
    const result = await prisma.autoEntrepreneur.findFirst({
        select: {
            taxRate: true,
        },
        where: {
            id: autoId,
        },
    });
    return result;
};
export async function prepareCurrentTaxDeclarationInfo(autoId) {
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();
    const dueDate = new Date(currentYear, currentMonth, 15);
    const remainDays = Math.ceil((dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    const period = now.toLocaleDateString("fr-FR", {
        month: "long",
        year: "numeric",
    });
    const [totalRevenue, taxInfo] = await Promise.all([
        calculateTotalRevenue(autoId, currentYear, currentMonth),
        getTaxRate(autoId),
    ]);
    const taxRate = taxInfo?.taxRate ?? 0;
    const taxAmount = parseFloat(((totalRevenue * taxRate) / 100).toFixed(2));
    const current = {
        totalRevenue,
        taxAmount,
        ramainDays: remainDays,
        periode: period,
        dueDate,
        status: "DRAFT",
    };
    return current;
}
export const PrepareTaxDeclarationData = async (data, autoEID) => {
    const totalRevenue = await calculateTotalRevenue(autoEID, data.year, data.month);
    const rate = await getTaxRate(autoEID);
    const taxRate = rate?.taxRate ?? 0;
    const tax = {
        period: data.period,
        year: data.year,
        month: data.month ?? null,
        totalRevenue,
        taxRate,
        taxAmount: (totalRevenue * taxRate) / 100,
        status: "DRAFT",
        dueDate: new Date(data.year, data.month ?? 12, 30),
        paymentDate: null,
        AutoEntrepreneurId: autoEID,
    };
    return tax;
};
//# sourceMappingURL=prepareData.js.map