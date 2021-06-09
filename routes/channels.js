const { Router } = require("express")
const channelsController = require("../controllers/channels")
const router = Router()

//router.get("/random")
router.get("/channels/:id", channelsController.getChannels)
router.get("/channels/:id/category", channelsController.getChannelsByCategory)

router.post("/channels", channelsController.createChannels)

module.exports = router