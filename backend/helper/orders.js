const Order = require('../models/order');
const Product = require('../models/product');
const ErrorHandler = require('../utils/errorHandler');
const Status = require('../utils/statusEnum');

const validateOrderItems = (orderItems) => {
	if(!orderItems || orderItems.length === 0)
		throw new ErrorHandler('No order items', Status.BAD_REQUEST.code);
};

const createOrder = (req, orderItems) => new Order({
	user: req.user.id,
	orderItems: orderItems,
	shippingAddress: req.body.shippingAddress,
	paymentMethod: req.body.paymentMethod,
	itemsPrice: req.body.itemsPrice,
	taxPrice: req.body.taxPrice,
	shippingPrice: req.body.shippingPrice,
	totalPrice: req.body.totalPrice,
});

const updateProductStock = (product, item) => {
	if(product.stock > 0) {
		product.stock -= item.qty;
		product.save();
	}
};

const updateOrderItems = async (orderItems) => {
	const productUpdates = orderItems.map(async (item) => {
		const product = await Product.findOne({
			'_id': item.productId,
			'variants._id': item.variantId,
		});

		if(!product)
			throw new ErrorHandler('Product not found', Status.NOT_FOUND.code);

		const variant = product.variants.id(item.variantId);

		if(!variant)
			throw new ErrorHandler('Variant not found', Status.NOT_FOUND.code);

		updateProductStock(product, item);
		// eslint-disable-next-line no-underscore-dangle
		const updateProduct = { ...product }._doc;

		updateProduct.variant = variant;
		delete updateProduct.variants;

		return { ...item, product: updateProduct };
	});

	const updatedOrder = await Promise.all(productUpdates);

	return updatedOrder;
};

const updateOrderPaymentDetails = (order, paymentInfo) => {
	order.isPaid = true;
	order.paidAt = Date.now();
	order.paymentResult = {
		id: paymentInfo.id,
		status: paymentInfo.status,
		updateTime: paymentInfo.updateTime,
		emailAddress: paymentInfo.emailAddress,
	};
	return order;
};

const updateOrderDeliveryDetails = (order) => {
	order.isDelivered = true;
	order.deliveredAt = Date.now();
	return order;
};

module.exports = {
	validateOrderItems,
	updateOrderItems,
	createOrder,
	updateOrderPaymentDetails,
	updateOrderDeliveryDetails,
};
