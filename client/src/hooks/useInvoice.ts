import { useState } from "react";
import type { Invoice } from "../types/invoice.types";
import { invoiceApi } from "../api/invoice.api";

export const useInvoice = () => {
    const [errors, setErrors] = useState<string>();
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [invoice, setInvoice] = useState<Invoice>();

    const fetchInvoices = async (page: number, limit: number) => {
        const response = await invoiceApi.getAllInvoices(page, limit);

        if(response.data) {
            setInvoices(response.data);
        }
    };

    const getOneInvoice = async (invoiceId: string) => {
        const response = await invoiceApi.getOneInvoice(invoiceId);

        if(response.data) {
            setInvoice(response.data);
        }
    };

    const getCustomersNames = async (customerName: string) => {
        const response = await invoiceApi.getAllCustomers(customerName);        
        return response;
    }

    const getArticlesNames = async (articleName: string) => {
        const response = await invoiceApi.getAllArticles(articleName);
        return response;
    }

    return {
        errors,
        invoices,
        invoice,
        fetchInvoices,
        getOneInvoice,
        getCustomersNames,
        getArticlesNames
    }
};