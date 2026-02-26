import { taxDeclarationService } from "./taxDeclaration.service.js";
import { PrepareTaxDeclarationData, prepareCurrentTaxDeclarationInfo, } from "./utils/prepareData.js";
import { AppError } from "../../utils/errorHandler.js";
import { DeclarationStatus } from "../../../generated/prisma/enums.js";
const getAllTaxDeclartion = async (req, res) => {
    try {
        const id = req.AutoEntrepreneurID;
        if (!id) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const TaxDeclartions = await taxDeclarationService.getAllTaxDeclarations(id);
        return res.status(200).json(TaxDeclartions);
    }
    catch (error) {
        console.error("Controller Error:", error);
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
const createTaxDeclaration = async (req, res) => {
    try {
        const AutoEntrepreneurID = req.AutoEntrepreneurID;
        if (!AutoEntrepreneurID) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const data = await PrepareTaxDeclarationData(req.body, AutoEntrepreneurID);
        const customer = await taxDeclarationService.createTaxDeclaration(data);
        return res.status(200).json(customer);
    }
    catch (error) {
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
const patchTaxDeclaration = async (req, res) => {
    try {
        const id = req.params.id;
        const tax = await taxDeclarationService.updateTaxDeclaration(id, {
            ...req.body,
            status: req.body.status,
        });
        return res.status(200).json(tax);
    }
    catch (error) {
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
const getTaxDeclaration = async (req, res) => {
    try {
        const id = req.params.id;
        const customer = await taxDeclarationService.getTaxDeclaration(id);
        return res.status(200).json(customer);
    }
    catch (error) {
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
const deleteTaxDeclaration = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        await taxDeclarationService.deleteTaxDeclaration(id);
        return res.status(204).send();
    }
    catch (error) {
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
const getCurrentTaxDeclarationInfo = async (req, res) => {
    try {
        const AutoEntrepreneurID = req.AutoEntrepreneurID;
        if (!AutoEntrepreneurID) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const now = new Date();
        const currentMonth = now.getMonth() + 1;
        const currentYear = now.getFullYear();
        const declaration = await taxDeclarationService.getCurrentTaxDeclaration(AutoEntrepreneurID, currentMonth, currentYear);
        let data;
        if (!declaration) {
            data = await prepareCurrentTaxDeclarationInfo(AutoEntrepreneurID);
        }
        else {
            data = {
                id: declaration.id ?? null,
                totalRevenue: Number(declaration.totalRevenue ?? 0),
                taxAmount: Number(declaration.taxAmount ?? 0),
                ramainDays: declaration.dueDate
                    ? Math.ceil((declaration.dueDate.getTime() - now.getTime()) /
                        (1000 * 60 * 60 * 24))
                    : 0,
                periode: declaration.period,
                dueDate: declaration.dueDate ?? now,
                status: declaration.status ?? DeclarationStatus.DRAFT,
            };
        }
        return res.status(200).json(data);
    }
    catch (error) {
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
export const taxDeclartaionController = {
    getAllTaxDeclartion,
    createTaxDeclaration,
    patchTaxDeclaration,
    getTaxDeclaration,
    deleteTaxDeclaration,
    getCurrentTaxDeclarationInfo,
};
//# sourceMappingURL=taxDeclaration.controller.js.map