const { Router } = require('mongoose')
const commentsControllers = require('../controllers/comments')

const router = Router()

router.get("/channel/:id/comments", commentsControllers.getCommentsByChannel)
router.post("/channel/id/comments", commentsControllers.postCommentsByChannel())

module.exports = router