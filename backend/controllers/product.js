const Product = require('../models/product');
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
exports.getProduct = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);

		if(!product) {
			return res.status(Status.NOT_FOUND.code).json({
				status: Status.NOT_FOUND.message,
				message: 'Product not found',
			});
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
