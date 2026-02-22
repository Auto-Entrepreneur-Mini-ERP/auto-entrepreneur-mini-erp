// expenses/expense.routes.ts
import { Router } from 'express';
import { expenseController } from './expense.controller.js';

const router = Router();

// Stats MUST be before /:id
router.get('/stats', expenseController.getStats);

router.get('/', expenseController.getExpenses);
router.get('/:id', expenseController.getExpense);

// createExpense & updateExpense are [multerMiddleware, asyncHandler] tuples
router.post('/', ...expenseController.createExpense);
router.patch('/:id', ...expenseController.updateExpense);
router.delete('/:id', expenseController.deleteExpense);

export default router;