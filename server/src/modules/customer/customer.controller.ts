import type { Request, Response } from "express";
import { customerService } from "./customer.service.js";
import type { CreateCustomerInput, PatchCustomerInput } from "./customer.schema.js";
import { AppError } from "../../utils/errorHandler.js";

const getAllCustomers = async (req: Request, res: Response) => {
   
  try {
    const autoentrepreneurId = req.AutoEntrepreneurID;
    const customers = await customerService.getAllCustomers(autoentrepreneurId as string);
    debugger; // optional

    return res.status(200).json(customers);
  } catch (error: any) {
    console.error("Controller Error:", error);

    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ message: error.message });
    }

    return res.status(500).json({ message: "Internal Server Error" });
  }
};


const createCustomer = async (req: Request, res: Response) => {
  try {
    const id = req.AutoEntrepreneurID;
    if (!id) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const customer = await customerService.createCustomer(id, req.body);
    return res.status(200).json(customer);
  } catch (error: any) {
 
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ "message": error.message });
    }
       if (error.code === "P2002") {
          return res.status(409).json({ message: "Email already exists" });
       }
     
    console.log(error)
    return res.status(500).json({ "message": "Internal Server Error" });
  }
};


const updateCustomer = async (
  req: Request,
  res: Response,
) => {
  try {
    const id = req.params.id as string;
    const customer = await customerService.updateCustomer(id, req.body);
    return res.status(200).json(customer);
  } catch (error: any) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    console.log(error);
    
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


const getCustomer = async (
  req: Request,
  res: Response,
) => {
  try {
    const id = req.params.id as string;
    const customer = await customerService.getCustomer(id);
    return res.status(200).json(customer);
  } catch (error: any) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ message: error.message });
    }

    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getCustomerByName = async (
  req: Request,
  res: Response,
) => {
  try {
    const { customerName } = req.params;
    const customer = await customerService.getCustomerByName(customerName as string);
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
    const id = req.params.id as string;
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
      CustomerId as string,
      AutoEntrepreneurID as string,
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
      CustomerId as string,
      AutoEntrepreneurID as string,
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
  getCustomerByName,
  deleteCustomer,
  getAllInvoices,
  getAllQuotes,
};
