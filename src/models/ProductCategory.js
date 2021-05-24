const mongoose = require('mongoose');

const ProductCategorySchema = new mongoose.Schema({
  name: String,
  active: { type: Boolean, default: true },
});

module.exports = mongoose.model('product_categories', ProductCategorySchema);
