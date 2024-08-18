const Order = require('../models/order');
const Product = require('../models/product');
const ErrorHandler = require('../utils/ErrorHandler');
const Status = require('../utils/statusEnum');

const validateOrderItems = (orderItems) => {
	if(!orderItems || orderItems.length === 0)
		throw new ErrorHandler('No order items', Status.BAD_REQUEST.code);
};

const createOrder = (req, orderItems) => new Order({
	user: req.user.id,
	orderItems: orderItems.map((item) => ({
		...item,
		product: item.product,
	})),
	shippingAddress: req.body.shippingAddress,
	paymentMethod: req.body.paymentMethod,
	itemsPrice: req.body.itemsPrice,
	taxPrice: req.body.taxPrice,
	shippingPrice: req.body.shippingPrice,
	totalPrice: req.body.totalPrice,
});

const updateProductStock = async (orderItems) => {
	const productUpdates = orderItems.map(async (item) => {
		const product = await Product.findById(item.product);

		if(!product)
			throw new ErrorHandler('Product not found', Status.NOT_FOUND.code);

		if(product.stock > 0) {
			product.stock -= item.qty;
			return product.save();
		}

		return product;
	});

	await Promise.all(productUpdates);
};

module.exports = {
	validateOrderItems,
	updateProductStock,
	createOrder,
};