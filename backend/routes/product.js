const express = require('express');
const {
	getProducts,
	addProduct,
	getProduct,
	updateProduct,
} = require('../controllers/product');

const router = express.Router();

router.route('/products').get(getProducts)
	.post(addProduct);

router.route('/products/:id').get(getProduct)
	.put(updateProduct);

module.exports = router;
