const Expenses = require('../../models/expenses');

module.exports.getExpenses = async (req, res)=>{
    try {
        let expenses = await Expenses.find({});
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

module.exports.addExpense = async (req, res)=>{
    try {
        let expense = await Expenses.create(req.body);
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

module.exports.updateExpense = async (req, res)=>{
    try {
        let {expenseId} = req.params;
        let expense = await Expenses.findOneAndUpdate({_id: expenseId}, {$set: {...req.body}}, {new : true});
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

module.exports.deleteExpense = async (req, res)=>{
    try {
        let {expenseId} = req.params;
        let expense = await Expenses.findOneAndUpdate({_id: expenseId}, {$set: {active: false}}, {new : true});
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

module.exports.undoDeletedExpense = async (req, res)=>{
    try {
        let {expenseId} = req.params;
        let expense = await Expenses.findOneAndUpdate({_id: expenseId}, {$set: {active: true}}, {new : true});
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