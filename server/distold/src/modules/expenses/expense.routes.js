// expenses/expense.routes.ts
import { Router } from 'express';
import { expenseController } from './expense.controller.js';
const router = Router();
router.get('/stats', expenseController.getStats);
router.get('/export-excel', expenseController.exportExcel);
router.get('/', expenseController.getExpenses);
router.get('/:id', expenseController.getExpense);
router.post('/', ...expenseController.createExpense);
router.patch('/:id', ...expenseController.updateExpense);
router.delete('/:id', expenseController.deleteExpense);
export default router;
//# sourceMappingURL=expense.routes.js.map