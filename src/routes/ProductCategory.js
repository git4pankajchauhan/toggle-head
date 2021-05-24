const express = require('express');
const Router = express.Router();
const ProductCategory = require('../models/ProductCategory');

/* Get All Product */
Router.get('/', async (req, res) => {
  try {
    const productCatData = await ProductCategory.find();
    res.status(200).json(productCatData);
  } catch (error) {
    res.status(400).json({ message: `caught the error: ${error}`, status: false });
  }
});

/* Add New Product */
Router.post('/', async (req, res) => {
  try {
    const productCatData = new ProductCategory({
      name: req.body.c_name,
      active: req.body.c_active,
    });
    await productCatData.save();
    res.status(201).json({ message: 'Product Category Added Successfully', status: true });
  } catch (error) {
    res.status(400).json({ message: `caught the error: ${error}`, status: false });
  }
});

module.exports = Router;
