const Product = require('../models/product');
const ErrorHandler = require('../utils/ErrorHandler');
const Status = require('../utils/statusEnum');

const checkProductExists = async (id, next) => {
	const product = await Product.findById(id);

	if(!product) {
		return next(new ErrorHandler('Product not found',
			Status.NOT_FOUND.code));
	}

	return product;
};

const checkAlreadyReviewed = (
	product, userId, next,
) => {
	const alreadyReviewed = product.reviews.find((review) =>
		review.user.toString() === userId);

	if(alreadyReviewed) {
		next(new ErrorHandler('Product already reviewed',
			Status.BAD_REQUEST.code));
		return true;
	}
	return false;
};

const updateProductRating = (product) => {
	product.numReviews = product.reviews.length;
	product.rating = product.reviews.reduce((acc, item) =>
		item.rating + acc, 0) / product.reviews.length;
};

const updateReview = (req) => ({
	rating: Number(req.body.rating),
	comment: req.body.comment,
	user: req.user.id,
});

module.exports = {
	checkProductExists,
	checkAlreadyReviewed,
	updateProductRating,
	updateReview,
};
