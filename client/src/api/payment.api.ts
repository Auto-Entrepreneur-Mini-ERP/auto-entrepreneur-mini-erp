import { api } from "./axios";

const getAllPayment = async () => {
    const resposne = await api.get("/payments");
    return resposne;
}

export const paymentApi = {
    getAllPayment,
}