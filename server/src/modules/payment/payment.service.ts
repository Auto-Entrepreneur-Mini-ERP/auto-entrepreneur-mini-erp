import { prisma } from "../../lib/prisma.js";
import { AppError } from "../../utils/errorHandler.js";
import { pagination } from "../../utils/pagination.js";
import { autoentrepreneurExists } from "../auto-entrepreneur/utils/autoentrepreneurExists.js";
import { paymentExists } from "./utils/paymentExists.js";

const getAllPayments = async (autoentrepreneurId: string, page: number, limit: number) => {
    autoentrepreneurExists(autoentrepreneurId);

    const startIndex = pagination.paginationIndex(page, limit);

    const payments = await prisma.payment.findMany({
        where:{
            AutoEntrepreneurId: autoentrepreneurId
        }
    });
    if(!payments) throw new AppError("No payments found!", 404);

    return payments;
};

const getOnePayment = async (autoentrepreneurId: string, paymentId: string) => {
    autoentrepreneurExists(autoentrepreneurId);
    paymentExists(paymentId);

    const payments = await prisma.payment.findMany({
        where:{
            id: paymentId,
            AutoEntrepreneurId: autoentrepreneurId
        }
    });
    if(!payments) throw new AppError("No payments found!", 404);

    return payments;
};

export const paymentService = {
    getAllPayments,
    getOnePayment,
};