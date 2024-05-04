const express = require('express');
const { getProducts } = require('../Controllers/productController');
const router = express.Router();

router.get('/product', getProducts);

module.exports = router;