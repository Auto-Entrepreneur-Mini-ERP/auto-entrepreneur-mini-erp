import type { CreateInvoiceData, CreateInvoiceLineData } from "../types/invoice.types";
import { api } from "./axios";

const getAllInvoices = async (page: number, limit: number) => {
    const response = await api.get("/invoice", { params: { page, limit } });
    return response;
};

const getOneInvoice = async (invoiceId: string) =>{
    const invoice = await api.get("/invoice/"+invoiceId);
    return invoice;
};

const getAllCustomers = async (customerName: string) => {
    const response = await api.get("/customers", { params: { customerName } });
    return response.data || [];
}

const getAllArticles = async (articleName: string) => {
    const products = await api.get("/products", { params: { name: articleName } });
    const services = await api.get("/services", { params: { name: articleName } });
    return [...products.data.data, ...services.data.data];
}

const createInvoice = async (invoiceData: CreateInvoiceData, invoiceLinesData: CreateInvoiceLineData[]) => {
        const response = await api.post("/invoice", { invoice: invoiceData, invoiceLine: invoiceLinesData });
        return response.data;
};

const updateInvoice = async (invoiceId: string, invoiceData: CreateInvoiceData, invoiceLinesData: CreateInvoiceLineData[]) => {
    const response = await api.put("/invoice/"+invoiceId, { invoice: invoiceData, invoiceLine: invoiceLinesData });
    return response.data;
}


export const invoiceApi = {
    getAllInvoices,
    getOneInvoice,
    getAllCustomers,
    getAllArticles,
    createInvoice,
    updateInvoice,
};