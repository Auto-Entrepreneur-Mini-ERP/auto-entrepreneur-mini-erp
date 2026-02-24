import type { CreateQuoteInput, QuoteLineInput, UpdateQuoteInput } from "../types/quote.types";
import { api } from "./axios";

const getAllQuotes = async (page?: number, limit?: number) => {
    const response = await api.get("/quote", { params: { page, limit } });
    return response;
};

const getOneQuote = async (quoteId: string) =>{
    const quote = await api.get("/quote/"+quoteId);
    return quote;
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

const createQuote = async (quoteData: CreateQuoteInput, quoteLinesData: QuoteLineInput[]) => {
    // server expects lines array on root for quote create
    delete quoteData.customerName;
    quoteData.issueDate = new Date();
    const sanitizedLines = quoteLinesData.map(({ name, ...rest }) => rest);
    const response = await api.post("/quote", { ...quoteData, lines: sanitizedLines });
    console.log(response);
    
    return response;
};

const updateQuote = async (quoteId: string, quoteData: UpdateQuoteInput) => {
    const response = await api.put("/quote/"+quoteId, { ...quoteData });    
    return response;
}

const acceptQuote = async (quoteId: string) => {
    const response = await api.get("/quote/"+quoteId+"/accepter");
    return response;
}

const refuseQuote = async (quoteId: string) => {
    const response = await api.get("/quote/"+quoteId+"/refuser");
    return response;
}


export const quoteApi = {
    getAllQuotes,
    getOneQuote,
    getAllCustomers,
    getAllArticles,
    createQuote,
    updateQuote,
    acceptQuote,
    refuseQuote
};
