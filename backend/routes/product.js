const express = require('express');
const {
	getProducts,
	addProduct,
	getProduct,
	updateProduct,
	deleteProduct,
	getProductReviews,
	createProductReview,
} = require('../controllers/product');
const {
	authorizeUser,
	authorizeAdmin,
} = require('../middleware/authentication');

const router = express.Router();

router.route('/products').get(getProducts)
	.post(
		authorizeUser, authorizeAdmin, addProduct,
	);

router.route('/products/:id').get(getProduct)
	.put(
		authorizeUser, authorizeAdmin, updateProduct,
	)
	.delete(
		authorizeUser, authorizeAdmin, deleteProduct,
	);

router.route('/products/reviews/:id')
	.post(authorizeUser, createProductReview)
	.get(getProductReviews);

module.exports = router;
