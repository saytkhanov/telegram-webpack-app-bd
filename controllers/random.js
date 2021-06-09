const Channel = require('../models/Channel')

const controllers = {
  getRandom: async (req, res) => {
    const getRandom = await Channel.find().lean()
    res.json(getRandom)
  }
}

module.exports = controllers;