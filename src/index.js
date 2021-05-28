require('dotenv').config();
require('./config/connection');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8000;

/* Import Routes */
const Product = require('./routes/Product');
const ProductCategory = require('./routes/ProductCategory');

/* Adding Middleware */
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/images', express.static('public/images'));

/* Creating access Routes */
app.use('/product', Product);
app.use('/product-category', ProductCategory);

/* listening Server */
app.listen(PORT, () => {
  console.log(`Connection listening on ${PORT}`);
});
