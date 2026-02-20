import { useState } from "react";
import { paymentApi } from "../api/payment.api";
import type { Payment } from "../types/payment.types";

export const usePayment = () => {

    const [payments, setPayments] = useState<Payment[]>();
    const [payment, setPayment] = useState<Payment>();

    const fetchPayments = async () => {
        const res = await paymentApi.getAllPayment();

        if(res.data){
            setPayments(res.data);
        }
    }

    const getOnePayment = async (payementId: string) => {
        const res = await paymentApi.getPaymentById(payementId);

        if(res.data){
            setPayment(res.data);
        }
    };

    return {
        payments,
        payment,
        fetchPayments,
        getOnePayment
    };
}