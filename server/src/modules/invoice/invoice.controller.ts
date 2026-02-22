import type { Request, Response } from "express"
import { invoicesService } from "./invoice.service.js";
import type { InvoiceCreateSchemaInput } from "./invoice.types.js";
import { log } from "node:console";

const getInvoices = async (req: Request, res: Response) =>{
    const autoentrepreneurId = req.AutoEntrepreneurID;

    const page = req.query.page ? parseInt(req.query.page as string, 10) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 10;

    const invoices = await invoicesService.getAllInvoices(autoentrepreneurId as string, page as number, limit as number);
    return res.status(200).json(invoices);
};

const getOneInvoice = async (req: Request, res: Response) =>{
    const autoentrepreneurId = req.AutoEntrepreneurID;
    const { invoiceId } = req.params;

    const invoice = await invoicesService.getInvoiceById(autoentrepreneurId as string, invoiceId as string);
    return res.status(200).json(invoice);
};

const getInvoicesByNumber = async (req: Request, res: Response) =>{
    const autoentrepreneurId = req.AutoEntrepreneurID;
    const { invoiceNumber } = req.params;

    const invoices = await invoicesService.getInvoiceByNumber(autoentrepreneurId as string, invoiceNumber as string);
    return res.status(200).json(invoices);
};

const createInvoice = async (req: Request, res: Response) => {
    const autoentrepreneurId = req.AutoEntrepreneurID;

    const data = req.body;
    
    const newInvoice = await invoicesService.addInvoice(autoentrepreneurId as string, data as InvoiceCreateSchemaInput);
    return res.status(200).json(newInvoice);
};

const editInvoice = async (req: Request, res: Response) => {
    const autoentrepreneurId = req.AutoEntrepreneurID;
    const { invoiceId } = req.params;
    const data = req.body;
        console.log(data);


    const updatedInvoice = await invoicesService.updateInvoice(autoentrepreneurId as string, invoiceId as string, data as InvoiceCreateSchemaInput);
    return res.status(200).json(updatedInvoice);
};

const cancelInvoice = async (req: Request, res: Response) => {
    const autoentrepreneurId = req.AutoEntrepreneurID;
    const { invoiceId } = req.params;

    const newInvoice = await invoicesService.cancelInvoice(autoentrepreneurId as string, invoiceId as string);
    return res.status(200).json(newInvoice);
};

const deleteInvoice = async (req: Request, res: Response) => {
    const autoentrepreneurId = req.AutoEntrepreneurID;
    const { invoiceId } = req.params;

    const newInvoice = await invoicesService.deleteInvoice(autoentrepreneurId as string, invoiceId as string);
    return res.status(200).json(newInvoice);
};

export const invoiceController = {
    getInvoices,
    getOneInvoice,
    getInvoicesByNumber,
    createInvoice,
    editInvoice,
    cancelInvoice,
    deleteInvoice,
};