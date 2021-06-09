const { Router } = require('express');
const router = Router();
const { getCategories, postCategories } = require('../controllers/categories')

router.get('/categories', getCategories);
router.post('/categories', postCategories )

module.exports = router;