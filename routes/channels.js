const { Router } = require("mongoose")
const channelsController = require("../controllers/channels")
const router = Router()

router.get("/random")
router.get("/channels/:id")

router.post("/channels")

module.exports = router