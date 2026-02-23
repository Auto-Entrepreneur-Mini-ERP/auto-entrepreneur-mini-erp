import { useState } from "react";
import { paymentApi } from "../api/payment.api";
import type { Payment, PaymentCreateInput } from "../types/payment.types";

export const usePayment = () => {
    const [errors, setErrors] = useState();

    const [payments, setPayments] = useState<Payment[]>();
    const [onePayment, setOnePayment] = useState<Payment>();

    const fetchPayments = async () => {
        const res = await paymentApi.getAllPayment();

        if(res.data){
            setPayments(res.data);
        }
    }

    const getOnePayment = async (payementId: string) => {
        const res = await paymentApi.getPaymentById(payementId);
        
        if(res.data){
            setOnePayment(res.data);
        }
    };

    const getInvoicesByNumber = async (invoiceNumber: string) => {
        const res = await paymentApi.getInvoicesByNumber(invoiceNumber);
        
        if(res.data){
            return res.data
        }
    };

    const createPayment = async (paymentData: PaymentCreateInput) => {
        const res = await paymentApi.savePayment(paymentData);
        
        if(res.data.statusCode && res.data.statusCode !== 200){
            setErrors(res.data);
            return;
        }
        return res;
    };

    const reconsiliatePayment = async (paymentId: string) => {
        const res = await paymentApi.reconsiliatePayment(paymentId);
        
        if(res.data.statusCode && res.data.statusCode !== 200){
            setErrors(res.data);
            return;
        }
        return res;
    }

    return {
        errors,
        payments,
        onePayment,
        fetchPayments,
        getOnePayment,
        getInvoicesByNumber,
        createPayment,
        reconsiliatePayment,
    };
}