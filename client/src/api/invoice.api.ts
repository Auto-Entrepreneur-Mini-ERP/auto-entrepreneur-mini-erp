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
    const products = await api.get("/products", { params: { articleName } });
    const services = await api.get("/services", { params: { articleName } });
    return [...(products.data || []), ...(services.data || [])];
}


export const invoiceApi = {
    getAllInvoices,
    getOneInvoice,
    getAllCustomers,
    getAllArticles
};