import type { Request, Response } from "express"
import { paymentService } from "./payment.service.js";
import type { PaymentCreateInput } from "./payment.types.js";

const getAllPayments = async (req: Request, res: Response) => {
    const { autoentrepreneurId } = req.params;
    const page = req.query.page ? parseInt(req.query.page as string, 10) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 10;

    const payments = await paymentService.getAllPayments(autoentrepreneurId as string, page as number, limit as number);
    return res.status(200).json(payments);
};

const getPaymentById = async (req: Request, res: Response) => {
    const { autoentrepreneurId, paymentId } = req.params;

    const payment = await paymentService.getOnePayment(autoentrepreneurId as string, paymentId as string);
    return res.status(200).json(payment);
};

const createPayment = async (req: Request, res: Response) => {
    const { autoentrepreneurId } = req.params;
    const { data } = req.body;

    const payment = await paymentService.createPayment(autoentrepreneurId as string, data as PaymentCreateInput);
    return res.status(200).json(payment);
};

const deletePayment = async (req: Request, res: Response) => {
    const { autoentrepreneurId, paymentId } = req.params;

    const payment = await paymentService.deletePayment(autoentrepreneurId as string, paymentId as string);
    return res.status(200).json(payment);
};

export const paymentController = {
    getAllPayments,
    getPaymentById,
    createPayment,
    deletePayment,
}