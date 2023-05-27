import express from 'express';
import { addIncome,deleteIncome,getIncomes } from '../controllers/income.js';
import { addExpense, deleteExpense, getExpense } from '../controllers/expense.js';

const router = express.Router();
 
router.post('/add-income',addIncome)
    .get('/get-incomes',getIncomes)
    .delete('/delete-income/:id',deleteIncome)
    .post('/add-expenses',addExpense)
    .get('/get-expenses',getExpense)
    .delete('/delete-expense/:id',deleteExpense)

export default router;