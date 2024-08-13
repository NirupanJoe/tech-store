const Product = require('../models/product');
const ErrorHandler = require('../utils/ErrorHandler');
const Status = require('../utils/statusEnum');
const asyncHandler = require('../utils/asyncHandler');

const sendResponse = (
	res, statusCode, message, data = {},
) => {
	res.status(statusCode).json({
		status: message,
		...data,
	});
};

const checkProductExists = async (id, next) => {
	const product = await Product.findById(id);

	if(!product) {
		return next(new ErrorHandler('Product not found',
			Status.NOT_FOUND.code));
	}

	return product;
};

exports.getProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({});

	sendResponse(
		res, Status.OK.code, Status.OK.message,
		{ products: products, count: products.length },
	);
});

exports.addProduct = asyncHandler(async (req, res) => {
	const product = await Product.create(req.body);

	sendResponse(
		res, Status.CREATED.code, Status.CREATED.message, { product },
	);
});

exports.getProduct = asyncHandler(async (
	req, res, next,
) => {
	const product = await checkProductExists(req.params.id, next);

	if(!product)
		return;

	sendResponse(
		res, Status.OK.code, Status.OK.message, { product },
	);
});

exports.updateProduct = asyncHandler(async (
	req, res, next,
) => {
	let product = await checkProductExists(req.params.id, next);

	if(!product)
		return;

	product = await Product.findByIdAndUpdate(
		req.params.id, req.body, {
			new: true,
			runValidators: true,
		},
	);

	sendResponse(
		res, Status.OK.code, Status.OK.message, { product },
	);
});

exports.deleteProduct = asyncHandler(async (
	req, res, next,
) => {
	const product = await checkProductExists(req.params.id, next);

	if(!product)
		return;

	await Product.findByIdAndDelete(req.params.id);

	sendResponse(
		res, Status.OK.code, Status.OK.message,
		{ message: 'Product deleted successfully' },
	);
});
