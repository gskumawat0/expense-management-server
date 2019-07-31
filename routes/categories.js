const router = require('express').Router({mergeParams: true});
const categoriesHandler = require('../lib/contollers/categories');

router.route('/')
    .get(categoriesHandler.getCategories)
    .post(categoriesHandler.addCategory)

router.route('/:categoryId')
    .put(categoriesHandler.updateCategory)
    .delete(categoriesHandler.deleteCategory)


module.exports = router