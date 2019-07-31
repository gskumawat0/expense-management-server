const Categories = require('../../models/categories');
const Expenses = require('../../models/expenses');

module.exports.getCategories = async (req, res)=>{
    try {
        let categories  = await Categories.find({});
        return res.json({
            success: true,
            categories
        })
    } catch (err) {
        return res.json({
            success: false,
            message: err.message
        })
    }
} 

module.exports.addCategory = async (req, res)=>{
    try {
        let category = await Categories.create(req.body);
        return res.json({
            success: true,
            category
        })
    } catch (err) {
        return res.json({
            success: false,
            message: err.message
        })
    }
} 

module.exports.updateCategory = async (req, res)=>{
    try {
        let {categoryId} = req.params;
        let oldCategory = await Categories.findOne({_id: categoryId});
        let [category, expenses] = await Promise.all([
            Categories.findOneAndUpdate({_id: categoryId}, {$set: {...req.body}}, {new : true}),
            Expenses.updateMany({category: oldCategory.category}, {$set: {category: req.body.category}})
        ]);
        return res.json({
            success: true,
            category
        })
    } catch (err) {
        return res.json({
            success: false,
            message: err.message
        })
    }
} 

module.exports.deleteCategory = async (req, res)=>{
    try {
        let {categoryId} = req.params;
        let category = await Categories.findOneAndDelete({_id: categoryId});
        let expenses = await Expenses.findOneAndDelete({category: category.category})
        return res.json({
            success: true,
            category
        })
    } catch (err) {
        return res.json({
            success: false,
            message: err.message
        })
    }
} 
