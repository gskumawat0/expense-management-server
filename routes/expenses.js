const router = require('express').Router({mergeParams: true});
const expensesHandler = require('../lib/contollers/expenses');

router.route('/')
    .get(expensesHandler.getExpenses)
    .post(expensesHandler.addExpense)

router.route('/:expenseId')
    .put(expensesHandler.updateExpense)
    .delete(expensesHandler.deleteExpense)

router.route('/:expenseId/undo')
    .get(expensesHandler.undoDeletedExpense)

module.exports = router