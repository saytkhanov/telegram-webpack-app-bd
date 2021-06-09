const mongoose = require('mongoose');

const Comment = new mongoose.Schema ({
  userName: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  channel: {type:mongoose.Types.ObjectId, ref: "Channel"},
  createdAt: {
    type: Date,
    default: Date.now
  },
  updateAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("Comment", Comment)