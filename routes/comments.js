const { Router } = require('mongoose')
const commentsControllers = require('../controllers/comments')

const router = Router()

router.get("/channel/:id/comments")
router.post("/channel/id/comments")