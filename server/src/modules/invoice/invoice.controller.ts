import type { Request, Response } from "express"
import { invoicesService } from "./invoice.service.js";

const getInvoices = async (req: Request, res: Response) =>{
    const { autoentrepreneurId } = req.params;
    const page = req.query.page ? parseInt(req.query.page as string, 10) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 10;

    const invoices = await invoicesService.getAllInvoices(autoentrepreneurId as string, page as number, limit as number);
    return res.status(200).json(invoices);
};

const getOneInvoice = async (req: Request, res: Response) =>{
    const { autoentrepreneurId, invoiceId } = req.params;

    const invoice = await invoicesService.getInvoiceById(autoentrepreneurId as string, invoiceId as string);
    return res.status(200).json(invoice);
};

export const invoiceController = {
    getInvoices,
    getOneInvoice
};