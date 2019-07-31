const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
    category: {
        type: String
    },
})

module.exports = mongoose.model('Expenses', categoriesSchema);