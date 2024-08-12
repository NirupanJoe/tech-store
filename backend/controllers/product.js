const Product = require('../models/product');
const Status = require('../utils/statusEnum');

exports.getProducts = async (req, res) => {
	const products = await Product.find();

	res.status(Status.OK.code).json({
		status: Status.OK.message,
		products: products,
	});
};
