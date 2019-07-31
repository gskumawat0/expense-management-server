const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    totalBudget: {
        type: Number
    },
    firstName:{
        type: String
    },
    lastName: {
        type: String
    }
})

module.exports = mongoose.model('Profile', profileSchema);