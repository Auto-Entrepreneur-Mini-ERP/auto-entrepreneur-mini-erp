import type { Request, Response } from "express";
import { customerService } from "./customer.service.js";
import type { CreateCustomerInput, PatchCustomerInput } from "./customer.schema.js";
import { AppError } from "../../utils/errorHandler.js";

const getAllCustomers = async (req: Request, res: Response) => {
   
  try {
    const id = req.AutoEntrepreneurID;
    const customers = await customerService.getAllCustomers(id);
 
    return res.status(200).json(customers);
  } catch (error: any) {
    console.error("Controller Error:", error);

    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ message: error.message });
    }

    return res.status(500).json({ message: "Internal Server Error" });
  }
};


const createCustomer = async (req: Request<{}, {}, CreateCustomerInput>, res: Response) => {
  try {

    const customer = await customerService.createCustomer(req.body);
    return res.status(200).json(customer);
  } catch (error: any) {
 
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ "message": error.message });
    }

    return res.status(500).json({ "message": "Internal Server Error" });
  }
};


const updateCustomer = async (
  req: Request<{}, {}, PatchCustomerInput>,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const customer = await customerService.updateCustomer(id, req.body);
    return res.status(200).json(customer);
  } catch (error: any) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ message: error.message });
    }

    return res.status(500).json({ message: "Internal Server Error" });
  }
};


const getCustomer = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const customer = await customerService.getCustomer(id);
    return res.status(200).json(customer);
  } catch (error: any) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ message: error.message });
    }

    return res.status(500).json({ message: "Internal Server Error" });
  }
};


const deleteCustomer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await customerService.deleteCustomer(id);
    return res.status(204).send();
  } catch (error: any) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ message: error.message });
    }

    return res.status(500).json({ message: "Internal Server Error" });
  }
};


const getAllInvoices = async (req: Request, res: Response) => {
  try {
    const { CustomerId } = req.params;
    const AutoEntrepreneurID = req.AutoEntrepreneurID;

    const invoices = await customerService.getAllInvoices(
      CustomerId,
      AutoEntrepreneurID,
    );
    return res.status(200).json(invoices);
  } catch (error: any) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ message: error.message });
    }

    return res.status(500).json({ message: "Internal Server Error" });
  }
};
const getAllQuotes = async (req: Request, res: Response) => {
  try {
    const { CustomerId } = req.params;
    const AutoEntrepreneurID = req.AutoEntrepreneurID;
    const invoices = await customerService.getAllQuotes(
      CustomerId,
      AutoEntrepreneurID,
    );
    return res.status(200).json(invoices);
  } catch (error: any) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ message: error.message });
    }

    return res.status(500).json({ message: "Internal Server Error" });
  }
};



export const customerController = {
  getAllCustomers,
  createCustomer,
  updateCustomer,
  getCustomer,
  deleteCustomer,
  getAllInvoices,
  getAllQuotes,
};
