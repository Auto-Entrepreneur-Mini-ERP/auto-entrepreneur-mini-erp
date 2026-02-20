import { api } from "./axios";

const getAllPayment = async () => {
    const resposne = await api.get("/payment");
    return resposne;
}

const getPaymentById = async (paymentId: string) => {
    const response = await api.get("/payment/"+paymentId);
    return response;
}

export const paymentApi = {
    getAllPayment,
    getPaymentById,
}