import type { Request, Response } from "express";
import { taxDeclarationService } from "./taxDeclaration.service.js";

import {
  PrepareTaxDeclarationData,
  prepareCurrentTaxDeclarationInfo,
} from "./utils/prepareData.js";

import { AppError } from "../../utils/errorHandler.js";
import type { TaxDeclaration } from "../../../generated/prisma/browser.js";
import { DeclarationStatus } from "../../../generated/prisma/browser.js";
import type { currentTaxDeclaaration } from "./taxDeclaration.types.js";

const getAllTaxDeclartion = async (req: Request, res: Response) => {
  try {
    const id = req.AutoEntrepreneurID;
    const TaxDeclartions =
      await taxDeclarationService.getAllTaxDeclarations(id);

    return res.status(200).json(TaxDeclartions);
  } catch (error: any) {
    console.error("Controller Error:", error);

    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ message: error.message });
    }

    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const createTaxDeclaration = async (req: Request, res: Response) => {
  try {
    const AutoEntrepreneurID = req.AutoEntrepreneurID;

    let data = await PrepareTaxDeclarationData(req.body, AutoEntrepreneurID);

    const customer = await taxDeclarationService.createTaxDeclaration(
      data as TaxDeclaration,
    );

    return res.status(200).json(customer);
  } catch (error: any) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ message: error.message });
    }

    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const patchTaxDeclaration = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const tax = await taxDeclarationService.updateTaxDeclaration(id, {
      ...req.body,
      status: req.body.status,
    });
    return res.status(200).json(tax);
  } catch (error: any) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ message: error.message });
    }

    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getTaxDeclaration = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const customer = await taxDeclarationService.getTaxDeclaration(id);
    return res.status(200).json(customer);
  } catch (error: any) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ message: error.message });
    }

    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteTaxDeclaration = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(id);
    await taxDeclarationService.deleteTaxDeclaration(id);
    return res.status(204).send();
  } catch (error: any) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ message: error.message });
    }

    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getCurrentTaxDeclarationInfo = async (req: Request, res: Response) => {
  try {
    const AutoEntrepreneurID = req.AutoEntrepreneurID;
    const now = new Date();

    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();

    let declaration = await taxDeclarationService.getCurrentTaxDeclaration(
      AutoEntrepreneurID,
      currentMonth,
      currentYear,
    );
    if (!declaration) {
      declaration = await prepareCurrentTaxDeclarationInfo(AutoEntrepreneurID);
    }
     const data: currentTaxDeclaaration = {
       id: declaration.id ?? null,
       totalRevenue: declaration.totalRevenue ?? 0,
       taxAmount: declaration.taxAmount ?? 0,
       ramainDays: Math.ceil(
         (declaration.dueDate!.getTime() - now.getTime()) /
           (1000 * 60 * 60 * 24),
       ),
      
       periode: declaration.period,
       dueDate: declaration.dueDate!,
       status: declaration.status!,
     };

    return res.status(200).json(data);
  } catch (error: any) {
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
