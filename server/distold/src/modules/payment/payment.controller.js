import { paymentService } from "./payment.service.js";
import { PayementMetod } from "./payment.types.js";
const getAllPayments = async (req, res) => {
    const autoentrepreneurId = req.AutoEntrepreneurID;
    const page = req.query.page ? parseInt(req.query.page, 10) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit, 10) : 10;
    const payments = await paymentService.getAllPayments(autoentrepreneurId, page, limit);
    return res.status(200).json(payments);
};
const getPaymentById = async (req, res) => {
    const autoentrepreneurId = req.AutoEntrepreneurID;
    const { paymentId } = req.params;
    const payment = await paymentService.getOnePayment(autoentrepreneurId, paymentId);
    return res.status(200).json(payment);
};
const createPayment = async (req, res) => {
    const autoentrepreneurId = req.AutoEntrepreneurID;
    const data = req.body;
    const payment = await paymentService.createPayment(autoentrepreneurId, data);
    return res.status(200).json(payment);
};
const updatePayment = async (req, res) => {
    const autoentrepreneurId = req.AutoEntrepreneurID;
    const { paymentId } = req.params;
    const { data } = req.body;
    const payment = await paymentService.updatePayment(autoentrepreneurId, paymentId, data);
    return res.status(200).json(payment);
};
const deletePayment = async (req, res) => {
    const autoentrepreneurId = req.AutoEntrepreneurID;
    const { paymentId } = req.params;
    const payment = await paymentService.deletePayment(autoentrepreneurId, paymentId);
    return res.status(200).json(payment);
};
const reconciliatePayment = async (req, res) => {
    const { paymentId } = req.params;
    const autoentrepreneurId = req.AutoEntrepreneurID;
    const payment = await paymentService.reconciliatePayment(autoentrepreneurId, paymentId);
    return res.status(200).json(payment);
};
const paymentStats = async (req, res) => {
    const autoentrepreneurId = req.AutoEntrepreneurID;
    const { periodFrom, periodTo, paymentMethod, isReconcieled } = req.query;
    const payments = await paymentService.paymentStats(autoentrepreneurId, periodFrom, periodTo, paymentMethod, isReconcieled);
    return res.status(200).json(payments);
};
export const paymentController = {
    getAllPayments,
    getPaymentById,
    createPayment,
    updatePayment,
    deletePayment,
    reconciliatePayment,
    paymentStats,
};
//# sourceMappingURL=payment.controller.js.map