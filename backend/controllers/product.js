const Product = require('../models/product');
const ErrorHandler = require('../utils/ErrorHandler');
const Status = require('../utils/statusEnum');

exports.getProducts = async (req, res) => {
	try {
		const products = await Product.find({});

		res.status(Status.OK.code).json({
			status: Status.OK.message,
			products: products,
			count: products.length,
		});
	}
	catch (err) {
		res.status(Status.BAD_REQUEST.code).json({
			status: Status.BAD_REQUEST.message,
			error: err,
		});
	}
};

exports.addProduct = async (req, res) => {
	try {
		const product = await Product.create(req.body);

		res.status(Status.CREATED.code).json({
			status: Status.CREATED.message,
			product: product,
		});
	}
	catch (err) {
		res.status(Status.BAD_REQUEST.code).json({
			status: Status.BAD_REQUEST.message,
			error: err,
		});
	}
};

// eslint-disable-next-line max-lines-per-function
exports.getProduct = async (
	req, res, next,
) => {
	try {
		const product = await Product.findById(req.params.id);

		if(!product) {
			return next(new ErrorHandler('Product not found',
				Status.NOT_FOUND.code));
		}

		res.status(Status.OK.code).json({
			status: Status.OK.message,
			product: product,
		});
	}
	catch (err) {
		res.status(Status.BAD_REQUEST.code).json({
			status: Status.BAD_REQUEST.message,
			error: err.message,
		});
	}
};

// eslint-disable-next-line max-lines-per-function
exports.updateProduct = async (
	req, res, next,
) => {
	try {
		const product = await Product.findByIdAndUpdate(
			req.params.id, req.body, {
				new: true,
				runValidators: true,
			},
		);

		if(!product) {
			return next(new ErrorHandler('Product not found',
				Status.NOT_FOUND.code));
		}

		res.status(Status.OK.code).json({
			status: Status.OK.message,
			product: product,
		});
	}
	catch (err) {
		res.status(Status.BAD_REQUEST.code).json({
			status: Status.BAD_REQUEST.message,
			error: err.message,
		});
	}
};

// eslint-disable-next-line max-lines-per-function
exports.deleteProduct = async (
	req, res, next,
) => {
	try {
		const product = await Product.findByIdAndDelete(req.params.id);

		if(!product) {
			return next(new ErrorHandler('Product not found',
				Status.NOT_FOUND.code));
		}

		res.status(Status.OK.code).json({
			status: Status.OK.message,
			message: 'Product deleted successfully',
		});
	}
	catch (err) {
		res.status(Status.BAD_REQUEST.code).json({
			status: Status.BAD_REQUEST.message,
			error: err.message,
		});
	}
};
