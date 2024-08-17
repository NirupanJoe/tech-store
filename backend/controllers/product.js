const Product = require('../models/product');
const ErrorHandler = require('../utils/ErrorHandler');
const Status = require('../utils/statusEnum');
const asyncHandler = require('../utils/asyncHandler');
const validateObjectId = require('../utils/validateObjectId');
const { buildQuery, paginateResults } = require('../utils/productQueryHandler');
const sendResponse = require('../utils/sendResponse');

const checkProductExists = async (id, next) => {
	const product = await Product.findById(id);

	if(!product) {
		return next(new ErrorHandler('Product not found',
			Status.NOT_FOUND.code));
	}

	return product;
};

exports.getProducts = asyncHandler(async (req, res) => {
	const queryObject = buildQuery(req.query);

	const {
		products,
		totalProducts,
		returnedProductCount,
	} = await paginateResults(
		queryObject, req.query.page, req.query.limit,
	);

	sendResponse(
		res, Status.OK.code, Status.OK.message,
		{ totalProducts, returnedProductCount, products },
	);
});

exports.addProduct = asyncHandler(async (req, res) => {
	req.body.user = req.user.id;
	const product = await Product.create(req.body);

	sendResponse(
		res, Status.CREATED.code, Status.CREATED.message, { product },
	);
});

exports.getProduct = asyncHandler(async (
	req, res, next,
) => {
	if(!validateObjectId(req.params.id, next))
		return;

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
	if(!validateObjectId(req.params.id, next))
		return;

	req.body.user = req.user.id;
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
	if(!validateObjectId(req.params.id, next))
		return;

	const product = await checkProductExists(req.params.id, next);

	if(!product)
		return;

	await Product.findByIdAndDelete(req.params.id);

	sendResponse(
		res, Status.OK.code, Status.OK.message,
		{ message: 'Product deleted successfully' },
	);
});
