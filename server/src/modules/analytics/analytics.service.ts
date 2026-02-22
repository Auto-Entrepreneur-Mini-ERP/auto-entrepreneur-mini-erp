import { InvoiceStatus } from "../../../generated/prisma/enums.js";
import { prisma } from "../../lib/prisma.js";
import { invoicesService } from "../invoice/invoice.service.js";
import { paymentService } from "../payment/payment.service.js";

const overview = async (autoenretpreneurId: string)=>{

    const currMonth = new Date().getMonth();
    const currYear = new Date().getFullYear();

    const startDate = currYear+'/'+(currMonth+1)+'/01';
    const lastDate = currYear+'/'+(currMonth+1)+'/30';

    // chiffre d'affaire mois actuel
    const CAmois = await prisma.invoice.groupBy({
        by:['AutoEntrepreneurId'],
        where:{
            AutoEntrepreneurId: autoenretpreneurId,
            issueDate: {
                gte: new Date(startDate),
                lte: new Date(lastDate)
            }
        },
        _sum:{
            totalAmount: true,
        }
    });

    // count factures impayee mois actuel
    const unpaidInvoices = await prisma.invoice.groupBy({
        by:['AutoEntrepreneurId'],
        where:{
            AutoEntrepreneurId: autoenretpreneurId,
            issueDate: {
                gte: new Date(startDate),
                lte: new Date(lastDate)
            },
            status: {
                in: [InvoiceStatus.UNPAID, InvoiceStatus.PARTIALLY_PAID]
            }
        },
        _count:{
            id: true,
        }
    });

    // revenus nett mois actuel
    const netRevenues = await prisma.payment.groupBy({
        by:['AutoEntrepreneurId'],
        where:{
            AutoEntrepreneurId: autoenretpreneurId,
            paymentDate: {
                gte: new Date(startDate),
                lte: new Date(lastDate)
            }
        },
        _sum:{
            amount: true,
        }
    });

    //total depences mois actuel
    const depenses = await prisma.expense.groupBy({
        by:['AutoEntrepreneurId'],
        where:{
            AutoEntrepreneurId: autoenretpreneurId,
            date: {
                gte: new Date(startDate),
                lte: new Date(lastDate)
            }
        },
        _sum:{
            amount: true,
        }
    });

    return {
        CAmois: CAmois[0]?._sum.totalAmount || 0,
        unpaidInvoices: unpaidInvoices[0]?._count.id || 0,
        netRevenues: netRevenues[0]?._sum.amount || 0,
        depenses: depenses[0]?._sum.amount || 0,
    }
};

const monthlyRevenues = async (autoentrepreneurId: string) => {

    let revenues: Array<{ index: number; amount: number }> = [];

    for (let index = 1; index <= 12; index++) {
        const rev = await prisma.$queryRaw`
        SELECT sum(amount) AS sumAmount
        FROM auto_entrepreneur_erp_db.payments
        WHERE AutoentrepreneurId = ${autoentrepreneurId}
        AND MONTH(paymentDate) = ${index}
        GROUP BY MONTH('paymentDate')` as Array<{ sumAmount?: number }>;
        
        revenues = [
            ...revenues,
            { index: index, amount: rev[0]?.sumAmount || 0 }
        ];
    }
    return revenues;
};

const monthlyDepenses = async (autoentrepreneurId: string) => {

    let expenses: Array<{ index: number; amount: number }> = [];
    for (let index = 1; index <= 12; index++) {
        const exp = await prisma.$queryRaw`
        SELECT sum(amount) AS sumAmount
        FROM auto_entrepreneur_erp_db.expenses
        WHERE AutoentrepreneurId = ${autoentrepreneurId}
        AND MONTH(date) = ${index}
        GROUP BY MONTH(date)`  as Array<{ sumAmount?: number }>;
        
        expenses = [
            ...expenses,
            { index: index, amount: exp[0]?.sumAmount || 0 }
        ];
    }
    return expenses;
};

const recents = async (autoentrepreneurId: string) => {

    const page = 1;
    const limit = 4;

    //recent invoices
    const recentInvoices = await invoicesService.getAllInvoices(autoentrepreneurId, page, limit);

    //recent payments
    const recentPayments = await paymentService.getAllPayments(autoentrepreneurId, page, limit);

    //unpaid invoices
    const unpaidInvoices = await prisma.invoice.findMany({
        skip: 0,
        take: limit,
        where:{
            AutoEntrepreneurId: autoentrepreneurId,
            status: {
                in:[InvoiceStatus.UNPAID, InvoiceStatus.PARTIALLY_PAID]
            }
        }
    });

    return {recentInvoices, recentPayments, unpaidInvoices};
};

export const analyticsService = {
    overview,
    monthlyRevenues,
    monthlyDepenses,
    recents,
}