import { prisma } from "../../lib/prisma.js";
import { AppError } from "../../utils/errorHandler.js";
import { DeclarationStatus } from "../../../generated/prisma/enums.js";
const getAllTaxDeclarations = async (autoEntrepreneurId) => {
    const taxDeclarations = await prisma.taxDeclaration.findMany({
        where: { AutoEntrepreneurId: autoEntrepreneurId },
        orderBy: { creationDate: "desc" },
    });
    return taxDeclarations;
};
const createTaxDeclaration = async (data) => {
    const newTaxDeclaration = await prisma.taxDeclaration.create({
        data: {
            period: data.period,
            year: data.year,
            month: data.month ?? null,
            totalRevenue: data.totalRevenue ?? 0,
            taxRate: data.taxRate ?? 0,
            taxAmount: data.taxAmount ?? 0,
            status: data.status ?? "DRAFT",
            dueDate: data.dueDate ?? null,
            paymentDate: data.paymentDate ?? null,
            pdfUrl: data.pdfUrl ?? null,
            AutoEntrepreneurId: data.AutoEntrepreneurId,
            creationDate: data.creationDate ?? new Date(),
        }
    });
    return newTaxDeclaration;
};
const updateTaxDeclaration = async (id, data) => {
    const existing = await prisma.taxDeclaration.findUnique({
        where: { id },
    });
    if (!existing) {
        throw new AppError("Tax declaration not found", 404);
    }
    const updateData = {};
    if (data.period !== undefined)
        updateData.period = data.period;
    if (data.year !== undefined)
        updateData.year = data.year;
    if ("month" in data)
        updateData.month = data.month ?? null;
    if ("totalRevenue" in data)
        updateData.totalRevenue = data.totalRevenue ?? 0;
    if ("taxRate" in data)
        updateData.taxRate = data.taxRate ?? 0;
    if ("taxAmount" in data)
        updateData.taxAmount = data.taxAmount ?? 0;
    if ("status" in data)
        updateData.status = data.status ?? "DRAFT";
    if ("dueDate" in data)
        updateData.dueDate = data.dueDate ?? null;
    if ("paymentDate" in data)
        updateData.paymentDate = data.paymentDate ?? null;
    if ("pdfUrl" in data)
        updateData.pdfUrl = data.pdfUrl ?? null;
    if ("AutoEntrepreneurId" in data)
        updateData.AutoEntrepreneurId = data.AutoEntrepreneurId;
    const updatedTaxDeclaration = await prisma.taxDeclaration.update({
        where: { id },
        data: updateData,
    });
    return updatedTaxDeclaration;
};
const getTaxDeclaration = async (id) => {
    const taxDeclaration = await prisma.taxDeclaration.findUnique({
        where: { id },
    });
    if (!taxDeclaration) {
        throw new AppError("Tax declaration not found", 404);
    }
    return taxDeclaration;
};
const deleteTaxDeclaration = async (id) => {
    try {
        const taxDeclaration = await prisma.taxDeclaration.delete({
            where: { id },
        });
        return taxDeclaration;
    }
    catch (err) {
        if (err.code === "P2025") {
            throw new AppError("Tax declaration not found", 404);
        }
        throw new AppError("Failed to delete tax declaration", 500);
    }
};
;
const getCurrentTaxDeclaration = async (autoEntrepreneurId, currentMonth, currentYear) => {
    const taxDeclaration = await prisma.taxDeclaration.findFirst({
        where: { AutoEntrepreneurId: autoEntrepreneurId, month: currentMonth, year: currentYear },
    });
    return taxDeclaration;
};
export const taxDeclarationService = {
    getAllTaxDeclarations,
    createTaxDeclaration,
    updateTaxDeclaration,
    getTaxDeclaration,
    deleteTaxDeclaration,
    getCurrentTaxDeclaration,
};
//# sourceMappingURL=taxDeclaration.service.js.map