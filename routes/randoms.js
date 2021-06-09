const {Router}= require('express');
const router = Router();
const { getRandom } = require('../controllers/random')

router.get('/', getRandom);

module.exports = router;