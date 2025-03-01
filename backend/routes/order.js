const express = require('express');
const {
	authorizeUser,
} = require('../middleware/authentication');
const {
	addOrderItems,
	getOrderById,
	getMyOrders,
	updateOrderToPaid,
	updateOrderToDelivered,
} = require('../controllers/order');

const router = express.Router();

router.use(authorizeUser);

router.route('').post(addOrderItems)
	.get(getMyOrders);

router.route('/:id').get(getOrderById);

router.route('/pay/:id').put(updateOrderToPaid);

router.route('/deliver/:id').put(updateOrderToDelivered);

module.exports = router;
