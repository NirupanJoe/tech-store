const asyncHandler = require('../utils/asyncHandler');
const sendResponse = require('../utils/sendResponse');
const Status = require('../utils/statusEnum');
const {
	validateOrderItems,
	createOrder,
	updateProductStock,
} = require('../helper/orders');
const Order = require('../models/order');
const ErrorHandler = require('../utils/ErrorHandler');
const validateObjectId = require('../utils/validateObjectId');

const addOrderItems = asyncHandler(async (
	req, res, next,
) => {
	const { orderItems } = req.body;

	try {
		validateOrderItems(orderItems);
		const order = createOrder(req, orderItems);

		await updateProductStock(orderItems);

		const createdOrder = await order.save();

		sendResponse(
			res, Status.OK.code, Status.OK.message, { order: createdOrder },
		);
	}
	catch (error) {
		next(error);
	}
});

const getMyOrders = asyncHandler(async (
	req, res, next,
) => {
	const orders = await Order.find({ user: req.user.id });

	if(orders.length === 0) {
		return next(new ErrorHandler('No orders found',
			Status.NOT_FOUND.code));
	}

	sendResponse(
		res, Status.OK.code, Status.OK.message, { orders },
	);
});

const getOrderById = asyncHandler(async (
	req, res, next,
) => {
	if(!validateObjectId(req.params.id, next))
		return;

	const order = await Order.findById(req.params.id);

	if(!order) {
		return next(new ErrorHandler('Order not found',
			Status.NOT_FOUND.code));
	}

	sendResponse(
		res, Status.OK.code, Status.OK.message, { order },
	);
});

module.exports = {
	addOrderItems,
	getMyOrders,
	getOrderById,
};
