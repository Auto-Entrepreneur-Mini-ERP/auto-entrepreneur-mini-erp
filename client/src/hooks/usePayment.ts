import { useState } from "react";
import { paymentApi } from "../api/payment.api";
import type { Payment } from "../types/payment.types";

export const usePayment = () => {

    const [payments, setPayments] = useState<Payment[]>();

    const fetchInvoices = async () => {
        const res = await paymentApi.getAllPayment();

        if(res.data){
            setPayments(res.data);
        }
    }

    return {
        payments,
        fetchInvoices
    };
}