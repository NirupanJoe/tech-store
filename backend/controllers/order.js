const asyncHandler = require('../utils/asyncHandler');
const sendResponse = require('../utils/sendResponse');
const Status = require('../utils/statusEnum');
const {
	validateOrderItems,
	createOrder,
	updateOrderPaymentDetails,
	updateOrderDeliveryDetails,
	updateProductStocks,
} = require('../helper/orders');
const Order = require('../models/order');
const ErrorHandler = require('../utils/errorHandler');
const validateObjectId = require('../utils/validateObjectId');

const addOrderItems = asyncHandler(async (
	req, res, next,
) => {
	const { orderItems, paymentInfo } = req.body;

	try {
		validateOrderItems(orderItems);

		const order = createOrder({ req, orderItems, paymentInfo });
		const createdOrder = await order.save();

		await updateProductStocks(orderItems);

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

const getAllOrders = asyncHandler(async (
	req, res, next,
) => {
	const orders = await Order.find();

	if(orders.length === 0) {
		return next(new ErrorHandler('No orders found',
			Status.NOT_FOUND.code));
	}

	sendResponse(
		res, Status.OK.code, Status.OK.message, { orders },
	);
});

const updateOrder = asyncHandler(async (
	req, res, next,
) => {
	if(!validateObjectId(req.params.id, next))
		return;

	const order = await Order.findById(req.params.id);

	if(!order) {
		return next(new ErrorHandler('Order not found',
			Status.NOT_FOUND.code));
	}

	const updatedOrder = await Order.findByIdAndUpdate(
		req.params.id, req.body, {
			new: true,
			runValidators: true,
		},
	);

	sendResponse(
		res, Status.OK.code, Status.OK.message, { order: updatedOrder },
	);
});

const updateOrderToPaid = asyncHandler(async (
	req, res, next,
) => {
	const order = await Order.findById(req.params.id);

	if(!order)
		return next(new ErrorHandler('Order not found', Status.NOT_FOUND.code));

	const updatedOrder = await updateOrderPaymentDetails(order, req.body)
		.save();

	res.status(Status.OK.code).json({
		success: true,
		message: 'Order marked as paid',
		order: updatedOrder,
	});
});

const updateOrderToDelivered = asyncHandler(async (
	req, res, next,
) => {
	const order = await Order.findById(req.params.id);

	if(!order)
		return next(new ErrorHandler('Order not found', Status.NOT_FOUND.code));

	const updatedOrder = await updateOrderDeliveryDetails(order).save();

	res.status(Status.OK.code).json({
		success: true,
		message: 'Order marked as delivered',
		order: updatedOrder,
	});
});

const deleteOrder = asyncHandler(async (
	req, res, next,
) => {
	if(!validateObjectId(req.params.id, next))
		return;

	const order = await Order.findByIdAndDelete(req.params.id);

	if(!order)
		return next(new ErrorHandler('Order not found', Status.NOT_FOUND.code));

	sendResponse(
		res, Status.OK.code, Status.OK.message,
		{ message: 'Order deleted successfully' },
	);
});

module.exports = {
	addOrderItems,
	getMyOrders,
	getOrderById,
	getAllOrders,
	updateOrder,
	updateOrderToPaid,
	updateOrderToDelivered,
	deleteOrder,
};
