import { invoicesService } from "./invoice.service.js";
import { log } from "node:console";
const getInvoices = async (req, res) => {
    const autoentrepreneurId = req.AutoEntrepreneurID;
    const page = req.query.page ? parseInt(req.query.page, 10) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit, 10) : 10;
    const invoices = await invoicesService.getAllInvoices(autoentrepreneurId, page, limit);
    return res.status(200).json(invoices);
};
const getOneInvoice = async (req, res) => {
    const autoentrepreneurId = req.AutoEntrepreneurID;
    const { invoiceId } = req.params;
    const invoice = await invoicesService.getInvoiceById(autoentrepreneurId, invoiceId);
    return res.status(200).json(invoice);
};
const getInvoicesByNumber = async (req, res) => {
    const autoentrepreneurId = req.AutoEntrepreneurID;
    const { invoiceNumber } = req.params;
    const invoices = await invoicesService.getInvoiceByNumber(autoentrepreneurId, invoiceNumber);
    return res.status(200).json(invoices);
};
const createInvoice = async (req, res) => {
    const autoentrepreneurId = req.AutoEntrepreneurID;
    const data = req.body;
    const newInvoice = await invoicesService.addInvoice(autoentrepreneurId, data);
    return res.status(200).json(newInvoice);
};
const editInvoice = async (req, res) => {
    const autoentrepreneurId = req.AutoEntrepreneurID;
    const { invoiceId } = req.params;
    const data = req.body;
    console.log(data);
    const updatedInvoice = await invoicesService.updateInvoice(autoentrepreneurId, invoiceId, data);
    return res.status(200).json(updatedInvoice);
};
const cancelInvoice = async (req, res) => {
    const autoentrepreneurId = req.AutoEntrepreneurID;
    const { invoiceId } = req.params;
    const newInvoice = await invoicesService.cancelInvoice(autoentrepreneurId, invoiceId);
    return res.status(200).json(newInvoice);
};
const deleteInvoice = async (req, res) => {
    const autoentrepreneurId = req.AutoEntrepreneurID;
    const { invoiceId } = req.params;
    const newInvoice = await invoicesService.deleteInvoice(autoentrepreneurId, invoiceId);
    return res.status(200).json(newInvoice);
};
const downloadInvoice = async (req, res) => {
    const autoentrepreneurId = req.AutoEntrepreneurID;
    const { invoiceId } = req.params;
    const { pdf, invoiceNumber } = await invoicesService.generatePdf(autoentrepreneurId, invoiceId);
    res.set({
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=${invoiceNumber}.pdf`,
    });
    return res.send(pdf);
};
export const invoiceController = {
    getInvoices,
    getOneInvoice,
    getInvoicesByNumber,
    createInvoice,
    editInvoice,
    cancelInvoice,
    deleteInvoice,
    downloadInvoice
};
//# sourceMappingURL=invoice.controller.js.map