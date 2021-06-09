const Comments = require('../models/Comment');

class commentsControllers {
  async getCommentsByChannel(req, res) {
    try {
      const comments = await Comments.findById({channel: req.params.id})
      res.json(comments)
    }catch (e) {
      console.log(e.message)
    }
  }
  async postCommentsByChannel(req, res) {
    try {
      const comments = new Comments ({
        userName: req.body.userName,
        text: req.body.text,
        channels: req.params.id
      })
      await res.save(comments)
      res.json(comments)
    }catch (e) {
      console.log(e.message)
    }
  }
}
module.exports = new commentsControllers()
