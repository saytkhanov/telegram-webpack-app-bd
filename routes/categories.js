const { Router } = require('express');
const router = Router();
const { getCategories, postCategories, getCategoriesId } = require('../controllers/categories')

router.get('/categories', getCategories);
router.get("/categories/:id", getCategoriesId)
router.post('/categories', postCategories )

module.exports = router;