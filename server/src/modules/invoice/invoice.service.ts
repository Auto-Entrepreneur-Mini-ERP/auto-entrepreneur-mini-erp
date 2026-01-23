import { prisma } from '../../../prisma/client.js';
import { AppError } from '../../utils/errorHandler.js';
import { paginationIndex } from '../../utils/pagination.js';
import type { InvoiceOutput } from './invoice.types.js';

const getAllInvoices = async (autoentrepreneurId: string, page: number, limit: number) => {

    const startIndex = paginationIndex(page as number, limit as number)
    
    const invoices = await prisma.invoice.findMany({
        skip: startIndex,
        take: 10,
        where: {
            autoentrepreneurId
        }
    }) as unknown as InvoiceOutput[];

    if(!invoices) throw new AppError("No invoices found", 404);
    return invoices;
};

const getInvoiceById = async (autoentrepreneurId: string, invoiceId: string) => {
    const invoice = await prisma.invoice.findUnique({
        where: {
            id: invoiceId,
            autoentrepreneurId
        },
        include: {
            InvoiceLine: true
        }
    }) as unknown as InvoiceOutput;

    if(!invoice) throw new AppError("Invoice not found", 404);
    return invoice;
};

export const invoicesService = {
    getAllInvoices,
    getInvoiceById
};