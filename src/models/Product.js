const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  category_id: mongoose.Schema.ObjectId,
  img_src: String,
  name: String,
  description: String,
  available_in: [String],
  active: { type: Boolean, default: true },
});

module.exports = mongoose.model('products', ProductSchema);
