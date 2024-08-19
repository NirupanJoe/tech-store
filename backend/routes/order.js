const express = require('express');
const {
	authorizeUser,
} = require('../middleware/authentication');
const {
	addOrderItems,
	getOrderById,
	getMyOrders,
	updateOrderToPaid,
} = require('../controllers/order');

const router = express.Router();

router.use(authorizeUser);

router.route('').post(addOrderItems)
	.get(getMyOrders);

router.route('/:id').get(getOrderById);

router.route('/:id/pay').put(updateOrderToPaid);

module.exports = router;
