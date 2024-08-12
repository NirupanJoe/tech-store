const Product = require('../models/product');
const Status = require('../utils/statusEnum');

exports.getProducts = async (req, res) => {
	try {
		const products = await Product.find({});

		res.status(Status.OK.code).json({
			status: Status.OK.message,
			products: products,
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
