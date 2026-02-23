import { prisma } from "../../lib/prisma.js";
import { AppError } from "../../utils/errorHandler.js";
import type { customer } from "./customer.types.js";

const getAllCustomers = async (autoentrepreneurId: string) => {
  const customers = await prisma.customer.findMany({
    where: {
      AutoEntrepreneurId: autoentrepreneurId,
    },
    include: {
      user: true,
    },
  });

  if (!customers) throw new AppError("No customers found", 404);
  return customers;
};
const createCustomer = async (authID : string,customerData: customer) => {
 
  const newUser = await prisma.user.create({
    data: {
      email: customerData.user.email,
      firstName: customerData.user.firstName ?? null,
      lastName: customerData.user.lastName ?? null,
      phone: customerData.user.phone ?? null,
      address: customerData.user.address ?? null,
    },
  });

   const newCustomer = await prisma.customer.create({
    data: {
      ice: customerData.ice,
      city: customerData.city ?? null,
      AutoEntrepreneurId:  authID,
      userId: newUser.id,  
    },
    include: {
      user: true,
    },
  });

  if (!newCustomer) throw new Error("Customer creation failed");
  return newCustomer;
};
 
const updateCustomer = async (id: string, customerData: Partial<Customer>) => {
  const data: any = {};

  // Customer fields
  if (customerData.ice !== undefined) data.ice = customerData.ice;

  if (customerData.city !== undefined) data.city = customerData.city ?? null;

  if (customerData.country !== undefined)
    data.country = customerData.country ?? null;

  if (customerData.isActive !== undefined)
    data.isActive = customerData.isActive;

  // Nested user fields
  if (customerData.user) {
    const userData: any = {};

    if (customerData.user.email !== undefined)
      userData.email = customerData.user.email;

    if (customerData.user.firstName !== undefined)
      userData.firstName = customerData.user.firstName ?? null;

    if (customerData.user.lastName !== undefined)
      userData.lastName = customerData.user.lastName ?? null;

    if (customerData.user.phone !== undefined)
      userData.phone = customerData.user.phone ?? null;

    if (customerData.user.address !== undefined)
      userData.address = customerData.user.address ?? null;

    if (Object.keys(userData).length > 0) {
      data.user = { update: userData };
    }
  }

 
  const updatedCustomer = await prisma.customer.update({
    where: { id },
    data,
    include: { user: true },
  });

  return updatedCustomer;
};


const getCustomer = async (id: string) => {
  const customer = await prisma.customer.findUnique({
    where: { id },
    include: {
      user: true,
    },
  });

  if (!customer) throw new AppError("Customer not found", 404);

  return customer;
};

const getCustomerByName = async (name: string) => {
  const customer = await prisma.customer.findMany({
    where: { user: {
      OR: [
        { firstName: { contains: name } },
        { lastName: { contains: name } },
      ],
    }},
    include: {
      user: true,
    },
  });

  if (!customer) throw new AppError("Customer not found", 404);

  return customer;
};

const deleteCustomer = async (id: string) => {
  try {
    const customer = await prisma.customer.delete({
      where: { id },
      include: { user: true },  
    });

    return customer;
  } catch (err: any) {
   
    if (err.code === "P2025") {
      throw new AppError("Customer not found", 404);
    }
    throw new AppError("Failed to delete customer", 500);
  }
};


const getAllInvoices = async (
  customerId: string,
  AutoEntrepreneurID: string,
) => {
  const invoices = await prisma.invoice.findMany({
    where: { customerId, AutoEntrepreneurId: AutoEntrepreneurID },
    orderBy: {
      creationDate: "desc",
    },
  });

  if (invoices.length === 0) {
    throw new AppError("No invoices found for this customer", 404);
  }

  return invoices;
};


const getAllQuotes = async (customerId: string, AutoEntrepreneurID:string) => {
  const invoices = await prisma.quote.findMany({
    where: { customerId, AutoEntrepreneurId: AutoEntrepreneurID },
    orderBy: {
      creationDate: "desc",
    },
  });

  if (invoices.length === 0) {
    throw new AppError("No Quotes found for this customer", 404);
  }

  return invoices;
};

export const customerService = {
  getAllCustomers: getAllCustomers,
  createCustomer: createCustomer,
  updateCustomer: updateCustomer,
  getCustomer: getCustomer,
  getCustomerByName: getCustomerByName,
  deleteCustomer: deleteCustomer,
  getAllInvoices: getAllInvoices,
  getAllQuotes: getAllQuotes
};
