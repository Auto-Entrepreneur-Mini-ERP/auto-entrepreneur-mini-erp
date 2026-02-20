 
import { InvoiceStatus } from "../../invoice/invoice.types.js"
 
import { prisma } from "../../../lib/prisma.js"
import type { TaxDeclaration } from "../taxDeclaration.types.js";


export const calculateTotalRevenue = async (
  autoEntrepreneurId: string,
  year: number,
  month: number,
) => {
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0, 23, 59, 59);

  const result = await prisma.invoice.aggregate({
    where: {
      AutoEntrepreneurId: autoEntrepreneurId,
      status: {
        in: [InvoiceStatus.PAID, InvoiceStatus.PARTIALLY_PAID],
      },
      issueDate: {
        gte: startDate,
        lte: endDate,
      },
    },
    _sum: {
      paidAmount: true,
    },
  });

  return result._sum.paidAmount || 0;
};

const getTaxRate = async (autoId : string) => {
  const result = await prisma.autoEntrepreneur.findFirst({
    select: {
      taxRate: true,
    },
    where: {
      id: autoId,
    },
  });

  return result
}

export const PrepareTaxDeclarationData = async (data : any, autoEID: string) =>
{
  let totalRevenue = await calculateTotalRevenue(autoEID, data.year, data.month);
  let rate = await getTaxRate(autoEID);
  let tax: TaxDeclaration = {
    period: data.period,
    year: data.year,
    month: data.month ?? null,

    totalRevenue: totalRevenue,
    taxRate: rate.taxRate,
    taxAmount: (totalRevenue * rate.taxRate) / 100,

    status: "DRAFT",
    dueDate: new Date(data.year, data.month ?? 12, 30),

    paymentDate: null,

    AutoEntrepreneurId: autoEID,
  };
  return tax;
}