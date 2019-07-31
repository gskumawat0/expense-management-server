const Expenses = require('../../models/expenses');

module.exports.getExpenses = (req, res)=>{
    try {
        let expenses = Expenses.find({});
        return res.json({
            success: true,
            expenses
        })
    } catch (err) {
        return res.json({
            success: false,
            message: err.message
        })
    }
} 

module.exports.addExpense = (req, res)=>{
    try {
        let expense = Expenses.create(req.body);
        return res.json({
            success: true,
            expense
        })
    } catch (err) {
        return res.json({
            success: false,
            message: err.message
        })
    }
} 

module.exports.updateExpense = (req, res)=>{
    try {
        let {expenseId} = req.params;
        let expense = Expenses.findOneAndUpdate({_id: expenseId}, {$set: {...req.body}}, {new : true});
        return res.json({
            success: true,
            expense
        })
    } catch (err) {
        return res.json({
            success: false,
            message: err.message
        })
    }
} 

module.exports.deleteExpense = (req, res)=>{
    try {
        let {expenseId} = req.params;
        let expense = Expenses.findOneAndUpdate({_id: expenseId}, {$set: {active: false}}, {new : true});
        return res.json({
            success: true,
            expense
        })
    } catch (err) {
        return res.json({
            success: false,
            message: err.message
        })
    }
} 

module.exports.undoDeletedExpense = (req, res)=>{
    try {
        let {expenseId} = req.params;
        let expense = Expenses.findOneAndUpdate({_id: expenseId}, {$set: {active: true}}, {new : true});
        return res.json({
            success: true,
            expense
        })
    } catch (err) {
        return res.json({
            success: false,
            message: err.message
        })
    }
} 