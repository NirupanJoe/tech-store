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

module.exports = {
	checkProductExists,
};
