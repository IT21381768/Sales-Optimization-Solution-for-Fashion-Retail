
const express = require('express');
const router = express.Router();
const Product = require('../Model/Products');


router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get('/:id', getProduct, (req, res) => {
  res.json(res.product);
});


async function getProduct(req, res, next) {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.product = product;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// Add more routes for creating, updating, and deleting products as needed

module.exports = router;
