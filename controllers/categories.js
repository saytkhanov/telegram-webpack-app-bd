const Category = require('../models/Category');

const controllers = {
  getCategories: async (req,res) => {
    const getCategories = await Category.find({}).lean
    res.json(getCategories)
  },
  postCategories: async (req, res) => {
    const postCategories = await new Category({
      name: req.body.name
    })
    await postCategories.save()
    res.json(postCategories)
  }
}

module.exports = controllers;