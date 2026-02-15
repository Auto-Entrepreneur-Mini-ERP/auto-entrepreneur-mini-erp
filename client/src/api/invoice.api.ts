import { api } from "./axios";

const getAllInvoices = async (page: number, limit: number) => {
    const response = await api.get("/invoice", { params: { page, limit } });
    return response;
};

const getOneInvoice = async (invoiceId: string) =>{
    const invoice = await api.get("/invoice/"+invoiceId);
    return invoice;
};


export const invoiceApi = {
    getAllInvoices,
    getOneInvoice,
};