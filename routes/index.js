const { Router } = require('express');
const router = Router();

router.use(require('./randoms'))
router.use(require('./categories'))
router.use(require('./channels'))
router.use(require('./comments'))

module.exports = router