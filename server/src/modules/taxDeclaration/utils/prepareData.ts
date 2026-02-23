 
import { InvoiceStatus } from "../../invoice/invoice.types.js"
 
import { prisma } from "../../../lib/prisma.js"
import type { TaxDeclaration,currentTaxDeclaaration } from "../taxDeclaration.types.js";

 

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
export async function prepareCurrentTaxDeclarationInfo(autoId: string): Promise<currentTaxDeclaaration> {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  const dueDate = new Date(currentYear, currentMonth, 15);

  const remainDays = Math.ceil(
    (dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  );

  const period = now.toLocaleDateString("fr-FR", {
    month: "long",
    year: "numeric",
  });

  const [totalRevenue, { taxRate }] = await Promise.all([
    calculateTotalRevenue(autoId, currentYear, currentMonth),
    getTaxRate(autoId),
  ]);

  const taxAmount = parseFloat(((totalRevenue * taxRate) / 100).toFixed(2));

  const current: currentTaxDeclaaration = {
    totalRevenue,
    taxAmount,
    ramainDays: remainDays,
    period,
    dueDate,
    status: "DRAFT",
  };

  return current;
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