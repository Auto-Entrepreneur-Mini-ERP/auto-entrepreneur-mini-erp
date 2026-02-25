import type { PaymentCreateInput } from "../types/payment.types";
import { api } from "./axios";

const getAllPayment = async (page: number, limit: number) => {
    const resposne = await api.get("/payment", { params: { page, limit } });
    return resposne;
}

const getPaymentById = async (paymentId: string) => {
    const response = await api.get("/payment/" + paymentId);
    return response;
}

const getInvoicesByNumber = async (invoiceNumber: string) => {
    const response = await api.get("/invoice/search/" + invoiceNumber);
    return response;
}

const savePayment = async (paymentData: PaymentCreateInput) => {
    const response = await api.post("/payment", paymentData);
    return response;
}

const reconsiliatePayment = async (paymentId: string) => {
    const response = await api.get("/payment/" + paymentId + "/rapprocher");
    return response;
}

export const paymentApi = {
    getAllPayment,
    getPaymentById,
    getInvoicesByNumber,
    savePayment,
    reconsiliatePayment
}