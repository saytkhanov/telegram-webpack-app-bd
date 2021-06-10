const Channel = require('../models/Channel')

const controllers = {
  getRandom: async (req, res) => {
    const getRandom = await Channel.aggregate([
      {$sample: {size: 6}}
    ])
    res.json(getRandom)
  }
}

module.exports = controllers;