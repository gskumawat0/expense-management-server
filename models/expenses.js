const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expensesSchema = new Schema({
    category: {
        type: String
    },
    itemName: {
        type: String
    },
    amount: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now()
    },
    active: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('Expenses', expensesSchema);