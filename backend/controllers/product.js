const Product = require('../models/product');
const Status = require('../utils/statusEnum');
const asyncHandler = require('../utils/asyncHandler');
const validateObjectId = require('../utils/validateObjectId');
const { buildQuery, paginateResults } = require('../utils/productQueryHandler');
const sendResponse = require('../utils/sendResponse');
const {
	checkProductExists,
	updateReview,
	checkAlreadyReviewed,
	updateProductRating,
} = require('../helper/product');

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
	req.body.variants = req.body.variants.map((variant) => ({
		...variant,
		discountedPrice: variant.price - variant.discount,
	}));

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

exports.createProductReview = asyncHandler(async (
	req, res, next,
) => {
	if(!validateObjectId(req.params.id, next))
		return;

	const product = await checkProductExists(req.params.id, next);

	if(!product)
		return;

	if(checkAlreadyReviewed(
		product, req.user.id, next,
	))
		return;

	const review = updateReview(req);

	product.reviews.push(review);
	updateProductRating(product);

	await product.save();

	sendResponse(
		res, Status.OK.code, Status.OK.message, { message: 'Review added' },
	);
});

exports.getProductReviews = asyncHandler(async (
	req, res, next,
) => {
	if(!validateObjectId(req.params.id, next))
		return;

	const product = await checkProductExists(req.params.id);

	await product.populate('reviews.user', 'name email');

	if(!product)
		return;

	sendResponse(
		res, Status.OK.code, Status.OK.message, { reviews: product.reviews },
	);
});

exports.deleteProductReview = asyncHandler(async (
	req, res, next,
) => {
	if(!validateObjectId(req.params.id, next))
		return;

	const product = await checkProductExists(req.params.id, next);

	if(!product)
		return;

	const reviews = product.reviews.filter((review) =>
		review.user.toString() !== req.user.id);

	product.reviews = reviews;
	updateProductRating(product);

	await product.save();

	sendResponse(
		res, Status.OK.code, Status.OK.message, { message: 'Review deleted' },
	);
});
