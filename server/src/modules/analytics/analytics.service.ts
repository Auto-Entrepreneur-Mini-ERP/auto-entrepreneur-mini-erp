import { InvoiceStatus } from "../../../generated/prisma/enums.js";
import { prisma } from "../../lib/prisma.js";
import { invoicesService } from "../invoice/invoice.service.js";
import { paymentService } from "../payment/payment.service.js";

const overview = async (autoenretpreneurId: string)=>{

    const currMonth = new Date().getMonth();
    const currYear = new Date().getFullYear();

    const startDate = currYear+'/'+currMonth+'/01';
    const lastDate = currYear+'/'+currMonth+'/30';

    // chiffre d'affaire mois actuel
    const CAmois = await prisma.invoice.groupBy({
        by:['AutoEntrepreneurId'],
        where:{
            AutoEntrepreneurId: autoenretpreneurId,
            issueDate: {
                gte: startDate,
                lte: lastDate
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
                gte: startDate,
                lte: lastDate
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
                gte: startDate,
                lte: lastDate
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
                gte: startDate,
                lte: lastDate
            }
        },
        _sum:{
            amount: true,
        }
    });

    return {
        CAmois,
        unpaidInvoices,
        netRevenues,
        depenses,
    }
};

const monthlyRevenues = async (autoentrepreneurId: string) => {

    let revenues = {};
    for (let index = 1; index <= 12; index++) {
        const rev = await prisma.$queryRaw`
        SELECT sum(amount) 
        FROM Payment
        WHERE autoenretpreneurId = ${autoentrepreneurId}
        AND MONTH('paymentDate') = ${index}
        GROUP BY MONTH('paymentDate')`;
        
        revenues = {
            ...revenues,
            index: rev
        }
    }
    return revenues;
};

const monthlyDepenses = async (autoentrepreneurId: string) => {

    let expenses = {};
    for (let index = 1; index <= 12; index++) {
        const exp = await prisma.$queryRaw`
        SELECT sum(amount) 
        FROM Expenses
        WHERE autoenretpreneurId = ${autoentrepreneurId}
        AND MONTH('date') = ${index}
        GROUP BY MONTH('date')`;
        
        expenses = {
            ...expenses,
            index: exp
        }
    }
    return expenses;
};

const recents = async (autoentrepreneurId: string) => {

    //recent invoices
    const recentInvoices = await invoicesService.getAllInvoices(autoentrepreneurId, 1, 4);

    //recent payments
    const recentPayments = await paymentService.getAllPayments(autoentrepreneurId, 1, 4);

    //unpaid invoices
    const unpaidInvoices = await prisma.invoice.findMany({
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