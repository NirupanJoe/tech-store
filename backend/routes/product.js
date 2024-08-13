const express = require('express');
const {
	getProducts,
	addProduct,
	getProduct,
	updateProduct,
	deleteProduct,
} = require('../controllers/product');

const router = express.Router();

router.route('/products').get(getProducts)
	.post(addProduct);

router.route('/products/:id').get(getProduct)
	.put(updateProduct)
	.delete(deleteProduct);

module.exports = router;
