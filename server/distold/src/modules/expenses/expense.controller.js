import { asyncHandler } from '../catalog/utils/asyncHandler.js';
import { expenseService } from './expense.service.js';
import { uploadReceipt } from '../../config/multer.config.js';
const getAutoEntrepreneurId = (req) => {
    if (!req.AutoEntrepreneurID)
        throw new Error('User not authenticated');
    return req.AutoEntrepreneurID;
};
const parseFilters = (query) => {
    const f = {};
    if (query.category)
        f.category = query.category;
    if (query.startDate)
        f.startDate = query.startDate;
    if (query.endDate)
        f.endDate = query.endDate;
    if (query.isDeductible !== undefined)
        f.isDeductible = query.isDeductible === 'true';
    if (query.minAmount)
        f.minAmount = parseFloat(query.minAmount);
    if (query.maxAmount)
        f.maxAmount = parseFloat(query.maxAmount);
    return f;
};
const parseBool = (val) => {
    if (val === undefined || val === null)
        return undefined;
    if (typeof val === 'boolean')
        return val;
    return String(val).toLowerCase() === 'true';
};
const getExpenses = asyncHandler(async (req, res) => {
    const autoEntrepreneurId = getAutoEntrepreneurId(req);
    const filters = parseFilters(req.query);
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit) : 20;
    const result = await expenseService.getExpenses(autoEntrepreneurId, filters, page, limit);
    res.status(200).json({ success: true, ...result });
});
const getStats = asyncHandler(async (req, res) => {
    const autoEntrepreneurId = getAutoEntrepreneurId(req);
    const { startDate, endDate } = req.query;
    const stats = await expenseService.getStats(autoEntrepreneurId, startDate, endDate);
    res.status(200).json({ success: true, data: stats });
});
const exportExcel = asyncHandler(async (req, res) => {
    const autoEntrepreneurId = getAutoEntrepreneurId(req);
    const filters = parseFilters(req.query);
    const buffer = await expenseService.exportToExcel(autoEntrepreneurId, filters);
    const filename = `depenses-${new Date().toISOString().split('T')[0]}.xlsx`;
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Length', buffer.length);
    res.send(buffer);
});
const getExpense = asyncHandler(async (req, res) => {
    const autoEntrepreneurId = getAutoEntrepreneurId(req);
    const { id } = req.params;
    const expense = await expenseService.getExpenseById(id, autoEntrepreneurId);
    if (!expense)
        return res.status(404).json({ success: false, error: 'Expense not found' });
    res.status(200).json({ success: true, data: expense });
});
const createExpense = [
    uploadReceipt,
    asyncHandler(async (req, res) => {
        const autoEntrepreneurId = getAutoEntrepreneurId(req);
        const body = req.body;
        const amount = typeof body.amount === 'string' ? parseFloat(body.amount) : body.amount;
        if (!amount || isNaN(amount) || amount <= 0)
            return res.status(400).json({ success: false, error: 'Le montant doit être supérieur à 0' });
        const receiptUrl = req.file ? `uploads/receipts/${req.file.filename}` : undefined;
        const expense = await expenseService.createExpense({
            ...body,
            amount,
            isDeductible: parseBool(body.isDeductible) ?? true,
            autoEntrepreneurId,
            receiptUrl,
        });
        res.status(201).json({ success: true, data: expense });
    }),
];
const updateExpense = [
    uploadReceipt,
    asyncHandler(async (req, res) => {
        const autoEntrepreneurId = getAutoEntrepreneurId(req);
        const { id } = req.params;
        const body = req.body;
        const receiptUrl = req.file ? `uploads/receipts/${req.file.filename}` : undefined;
        if (body.amount !== undefined && typeof body.amount === 'string')
            body.amount = parseFloat(body.amount);
        const expense = await expenseService.updateExpense(id, autoEntrepreneurId, {
            ...body,
            isDeductible: body.isDeductible !== undefined ? parseBool(body.isDeductible) : undefined,
            receiptUrl,
        });
        if (!expense)
            return res.status(404).json({ success: false, error: 'Expense not found' });
        res.status(200).json({ success: true, data: expense });
    }),
];
const deleteExpense = asyncHandler(async (req, res) => {
    const autoEntrepreneurId = getAutoEntrepreneurId(req);
    const { id } = req.params;
    const deleted = await expenseService.deleteExpense(id, autoEntrepreneurId);
    if (!deleted)
        return res.status(404).json({ success: false, error: 'Expense not found' });
    res.status(204).send();
});
export const expenseController = {
    getExpenses,
    getStats,
    exportExcel,
    getExpense,
    createExpense,
    updateExpense,
    deleteExpense,
};
//# sourceMappingURL=expense.controller.js.map