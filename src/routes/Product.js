const express = require('express');
const Router = express.Router();
const Product = require('../models/Product');

/* Get All Product */
Router.get('/', async (req, res) => {
  try {
    const productData = await Product.find();
    res.status(200).json(productData);
  } catch (error) {
    res.status(400).json({ message: `caught the error: ${error}`, status: false });
  }
});

/* Add New Product */
Router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const available_in_arr = req.body.p_available_in.split(',');
    const productData = new Product({
      category_id: req.body.p_category_id,
      img_src: req.body.p_img_src,
      name: req.body.p_name,
      description: req.body.p_description,
      available_in: available_in_arr,
      active: req.body.p_active,
    });
    await productData.save();
    res.status(201).json({ message: 'Product Added Successfully', status: true });
  } catch (error) {
    res.status(400).json({ message: `caught the error: ${error}`, status: false });
  }
});

/* Filter Product by Category */
Router.post('/filter', async (req, res) => {
  try {
    const category_id = req.body.category_id.split(',');
    const productData = await Product.find({ category_id: { $in: category_id } });
    res.status(200).json(productData);
  } catch (error) {
    res.status(400).json({ message: `caught the error: ${error}`, status: false });
  }
});

module.exports = Router;
