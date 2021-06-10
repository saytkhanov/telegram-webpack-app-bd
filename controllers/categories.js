const Category = require('../models/Category');

const controllers = {
  getCategories: async (req,res) => {
    const getCategories = await Category.find()
    res.json(getCategories)
  },
  getCategoriesId: async (req, res) => {
    const getCategoriesId = await Category.findById(req.params._id)
    res.json(getCategoriesId)
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