// expenses/expense.service.ts
import { prisma } from "../../lib/prisma.js";
import type { Prisma, Expense } from "../../../generated/prisma/browser.js";
import * as fs from "fs";
import * as path from "path";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const ExcelJS = require("exceljs") as typeof import("exceljs");

import type {
  CreateExpenseInput,
  UpdateExpenseInput,
  ExpenseFilters,
  ExpenseResponse,
  ExpenseStats,
  ExpenseCategoryStats,
} from "./expense.types.js";

const CATEGORY_LABELS: Record<string, string> = {
  FOURNITURES: "Fournitures",
  TRANSPORT: "Transport",
  COMMUNICATION: "Communication",
  ABONNEMENT: "Abonnement",
  FORMATION: "Formation",
  LOGICIEL: "Logiciel",
  EQUIPEMENT: "Équipement",
  HÉBERGEMENT: "Hébergement",
  REPAS: "Repas",
  LOYER: "Loyer / Bureau",
  MATERIEL: "Matériel",
  MAINTENANCE: "Maintenance",
  PUBLICITE: "Publicité",
  ASSURANCE: "Assurance",
  AUTRE: "Autre",
};

const PAYMENT_LABELS: Record<string, string> = {
  CASH: "Espèces",
  CHECK: "Chèque",
  BANK_TRANSFER: "Virement bancaire",
  CREDIT_CARD: "Carte bancaire",
  MOBILE_PAYMENT: "Paiement mobile",
  OTHER: "Autre",
};

const toResponse = (expense: any): ExpenseResponse => ({
  ...expense,
  amount: Number(expense.amount),
  autoEntrepreneurId: expense.AutoEntrepreneurId,
});

export class ExpenseService {
  // ── CREATE ─────────────────────────────────────────────────────────────────
  async createExpense(
    data: CreateExpenseInput & {
      autoEntrepreneurId: string;
      receiptUrl?: string | undefined;
    },
  ): Promise<ExpenseResponse> {
    const expense = await prisma.expense.create({
      data: {
        category: data.category,
        description: data.description ?? null,
        amount: data.amount,
        date: new Date(data.date),
        supplier: data.supplier ?? null,
        paymentMethod: data.paymentMethod,
        receiptUrl: data.receiptUrl ?? null,
        isDeductible: data.isDeductible ?? true,
        AutoEntrepreneurId: data.autoEntrepreneurId,
      },
    });
    return toResponse(expense);
  }

  // ── GET ALL ────────────────────────────────────────────────────────────────
  async getExpenses(
    autoEntrepreneurId: string,
    filters?: ExpenseFilters,
    page = 1,
    limit = 20,
  ): Promise<{ data: ExpenseResponse[]; total: number; page: number; totalPages: number }> {
    const where = this._buildWhere(autoEntrepreneurId, filters);
    const skip = (page - 1) * limit;

    const [expenses, total] = await Promise.all([
      prisma.expense.findMany({ where, orderBy: { date: "desc" }, skip, take: limit }),
      prisma.expense.count({ where }),
    ]);

    return { data: expenses.map(toResponse), total, page, totalPages: Math.ceil(total / limit) };
  }

  // ── GET BY ID ──────────────────────────────────────────────────────────────
  async getExpenseById(id: string, autoEntrepreneurId: string): Promise<ExpenseResponse | null> {
    const expense = await prisma.expense.findFirst({
      where: { id, AutoEntrepreneurId: autoEntrepreneurId },
    });
    return expense ? toResponse(expense) : null;
  }

  // ── UPDATE ─────────────────────────────────────────────────────────────────
  async updateExpense(
    id: string,
    autoEntrepreneurId: string,
    data: UpdateExpenseInput & { receiptUrl?: string | undefined },
  ): Promise<ExpenseResponse | null> {
    const existing = await prisma.expense.findFirst({
      where: { id, AutoEntrepreneurId: autoEntrepreneurId },
    });
    if (!existing) return null;

    if (data.receiptUrl && existing.receiptUrl) this._deleteFile(existing.receiptUrl);

    const updateData: Prisma.ExpenseUpdateInput = {};
    if (data.category !== undefined) updateData.category = data.category;
    if (data.description !== undefined) updateData.description = data.description;
    if (data.amount !== undefined) updateData.amount = data.amount;
    if (data.date !== undefined) updateData.date = new Date(data.date);
    if (data.supplier !== undefined) updateData.supplier = data.supplier;
    if (data.paymentMethod !== undefined) updateData.paymentMethod = data.paymentMethod;
    if (data.isDeductible !== undefined) updateData.isDeductible = data.isDeductible;
    if (data.receiptUrl !== undefined) updateData.receiptUrl = data.receiptUrl;

    const updated = await prisma.expense.update({ where: { id }, data: updateData });
    return toResponse(updated);
  }

  // ── DELETE ─────────────────────────────────────────────────────────────────
  async deleteExpense(id: string, autoEntrepreneurId: string): Promise<boolean> {
    const existing = await prisma.expense.findFirst({
      where: { id, AutoEntrepreneurId: autoEntrepreneurId },
    });
    if (!existing) return false;

    if (existing.receiptUrl) this._deleteFile(existing.receiptUrl);
    await prisma.expense.delete({ where: { id } });
    return true;
  }

  // ── STATS ──────────────────────────────────────────────────────────────────
  async getStats(
    autoEntrepreneurId: string,
    startDate?: string | Date,
    endDate?: string | Date,
  ): Promise<ExpenseStats> {
    const where: Prisma.ExpenseWhereInput = { AutoEntrepreneurId: autoEntrepreneurId };
    if (startDate || endDate) {
      where.date = {};
      if (startDate) (where.date as any).gte = new Date(startDate);
      if (endDate) (where.date as any).lte = new Date(endDate);
    }

    const expenses = await prisma.expense.findMany({ where });
    const totalAmount = expenses.reduce((s: number, e: any) => s + Number(e.amount), 0);
    const deductibleAmount = expenses
      .filter((e: any) => e.isDeductible)
      .reduce((s: number, e: any) => s + Number(e.amount), 0);

    const categoryMap = new Map<string, { total: number; count: number }>();
    for (const e of expenses) {
      const ex = categoryMap.get(e.category) ?? { total: 0, count: 0 };
      categoryMap.set(e.category, { total: ex.total + Number(e.amount), count: ex.count + 1 });
    }

    const byCategory: ExpenseCategoryStats[] = Array.from(categoryMap.entries()).map(
      ([category, { total, count }]) => ({ category, total, count }),
    );

    return {
      totalAmount,
      deductibleAmount,
      nonDeductibleAmount: totalAmount - deductibleAmount,
      count: expenses.length,
      byCategory,
    };
  }

  // ── EXPORT EXCEL ───────────────────────────────────────────────────────────
  async exportToExcel(autoEntrepreneurId: string, filters?: ExpenseFilters): Promise<Buffer> {
    const where = this._buildWhere(autoEntrepreneurId, filters);
    const expenses = await prisma.expense.findMany({
      where,
      orderBy: { date: "desc" },
    });

    console.log(`[ExcelExport] Generating Excel for ${expenses.length} expenses`);

    const workbook = new ExcelJS.Workbook();
    workbook.creator = "Auto-Entrepreneur ERP";
    workbook.created = new Date();

    const sheet = workbook.addWorksheet("Dépenses", {
      pageSetup: { paperSize: 9, orientation: "landscape" },
    });

    sheet.columns = [
      { header: "Date", key: "date", width: 14 },
      { header: "Catégorie", key: "category", width: 18 },
      { header: "Description", key: "description", width: 35 },
      { header: "Fournisseur", key: "supplier", width: 25 },
      { header: "Montant (MAD)", key: "amount", width: 16 },
      { header: "Mode de paiement", key: "paymentMethod", width: 22 },
      { header: "Déductible", key: "isDeductible", width: 13 },
      { header: "Justificatif", key: "receipt", width: 14 },
    ];

    // ── Header row styling
    const headerRow = sheet.getRow(1);
    headerRow.eachCell((cell: any) => {
      cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF2D3194" } };
      cell.font = { bold: true, color: { argb: "FFFFFFFF" }, size: 11 };
      cell.alignment = { vertical: "middle", horizontal: "center" };
      cell.border = { bottom: { style: "thin", color: { argb: "FFE0E0E0" } } };
    });
    headerRow.height = 28;

    // ── Data rows
    expenses.forEach((e: Expense, idx: number) => {
      const row = sheet.addRow({
        date: new Date(e.date).toLocaleDateString("fr-MA"),
        category: CATEGORY_LABELS[e.category] ?? e.category,
        description: e.description ?? "",
        supplier: e.supplier ?? "",
        amount: Number(e.amount),
        paymentMethod: PAYMENT_LABELS[e.paymentMethod] ?? e.paymentMethod,
        isDeductible: e.isDeductible ? "Oui" : "Non",
        receipt: e.receiptUrl ? "✓" : "",
      });

      const bgColor = idx % 2 === 0 ? "FFFAFAFA" : "FFFFFFFF";
      row.eachCell((cell: any) => {
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: bgColor } };
        cell.alignment = { vertical: "middle" };
        cell.border = { bottom: { style: "hair", color: { argb: "FFE8E8E8" } } };
      });

      const amountCell = row.getCell("amount");
      amountCell.numFmt = '#,##0.00 "MAD"';
      amountCell.alignment = { horizontal: "right", vertical: "middle" };

      const deductCell = row.getCell("isDeductible");
      deductCell.alignment = { horizontal: "center", vertical: "middle" };
      if (e.isDeductible) deductCell.font = { color: { argb: "FF16A34A" }, bold: true };

      row.getCell("receipt").alignment = { horizontal: "center", vertical: "middle" };
      row.height = 22;
    });

    // ── Total row
    if (expenses.length > 0) {
      sheet.addRow({});
      const totalRow = sheet.addRow({
        description: "TOTAL",
        amount: expenses.reduce((s: number, e: any) => s + Number(e.amount), 0),
      });
      totalRow.eachCell((cell: any) => {
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFF8BC00" } };
        cell.font = { bold: true, size: 11 };
        cell.alignment = { vertical: "middle" };
      });
      const totalAmountCell = totalRow.getCell("amount");
      totalAmountCell.numFmt = '#,##0.00 "MAD"';
      totalAmountCell.alignment = { horizontal: "right", vertical: "middle" };
      totalRow.getCell("description").alignment = { horizontal: "right", vertical: "middle" };
      totalRow.height = 26;
    }

    sheet.views = [{ state: "frozen", ySplit: 1 }];
    sheet.autoFilter = {
      from: { row: 1, column: 1 },
      to: { row: 1, column: sheet.columns.length },
    };

    const arrayBuffer = await workbook.xlsx.writeBuffer();
    const buffer = Buffer.from(arrayBuffer);

    console.log(`[ExcelExport] Buffer generated: ${buffer.length} bytes`);
    return buffer;
  }

  // ── PRIVATE HELPERS ────────────────────────────────────────────────────────
  private _buildWhere(
    autoEntrepreneurId: string,
    filters?: ExpenseFilters,
  ): Prisma.ExpenseWhereInput {
    const where: Prisma.ExpenseWhereInput = { AutoEntrepreneurId: autoEntrepreneurId };
    if (filters?.category) where.category = filters.category;
    if (filters?.isDeductible !== undefined) where.isDeductible = filters.isDeductible;
    if (filters?.startDate || filters?.endDate) {
      where.date = {};
      if (filters.startDate) (where.date as any).gte = new Date(filters.startDate);
      if (filters.endDate) (where.date as any).lte = new Date(filters.endDate);
    }
    if (filters?.minAmount !== undefined || filters?.maxAmount !== undefined) {
      where.amount = {};
      if (filters.minAmount !== undefined) (where.amount as any).gte = filters.minAmount;
      if (filters.maxAmount !== undefined) (where.amount as any).lte = filters.maxAmount;
    }
    return where;
  }

  private _deleteFile(fileUrl: string): void {
    try {
      const filePath = path.resolve(fileUrl);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    } catch (err) {
      console.error("[ExpenseService] Failed to delete receipt file:", err);
    }
  }
}

export const expenseService = new ExpenseService();