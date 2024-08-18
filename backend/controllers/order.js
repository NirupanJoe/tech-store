const asyncHandler = require('../utils/asyncHandler');
const sendResponse = require('../utils/sendResponse');
const Status = require('../utils/statusEnum');
const {
	validateOrderItems,
	createOrder,
	updateProductStock,
} = require('../helper/orders');

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

module.exports = { addOrderItems };
