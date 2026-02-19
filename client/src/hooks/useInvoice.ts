import { useState } from "react";
import type { CreateInvoiceData, CreateInvoiceLineData, Invoice } from "../types/invoice.types";
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

    const createInvoice = async (invoiceData: CreateInvoiceData, invoiceLinesData: CreateInvoiceLineData[]) => {
        const response = await invoiceApi.createInvoice(invoiceData, invoiceLinesData);

        if(response.data.statusCode && response.data.statusCode !== 200){
            return setErrors(response.data.message || "Une erreur s’est produite lors de la création de la facture.");
        }
        return response;
    }

    const updateInvoice = async (invoiceId: string, invoiceData: CreateInvoiceData, invoiceLinesData: CreateInvoiceLineData[]) => {
        const response = await invoiceApi.updateInvoice(invoiceId, invoiceData, invoiceLinesData);
        if(response.data.statusCode && response.data.statusCode !== 200){
            return setErrors(response.data.message || "Une erreur s’est produite lors de la mise à jour de la facture.");
        }
        return response;
    }

    return {
        errors,
        invoices,
        invoice,
        fetchInvoices,
        getOneInvoice,
        getCustomersNames,
        getArticlesNames,
        createInvoice,
        updateInvoice,
    }
};