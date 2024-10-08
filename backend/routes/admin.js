const express = require('express');
const {
	getAllUsers,
	getUserById,
	updateUser,
	deleteUser,
} = require('../controllers/auth');
const {
	authorizeUser,
	authorizeAdmin,
} = require('../middleware/authentication');
const {
	getAllOrders,
	updateOrder,
	deleteOrder,
} = require('../controllers/order');

const Router = express.Router();

Router.use(authorizeUser, authorizeAdmin);

Router.route('/users')
	.get(getAllUsers);

Router.route('/users/:id')
	.get(getUserById)
	.put(updateUser)
	.delete(deleteUser);

Router.route('/orders').get(getAllOrders);

Router.route('/orders/:id').put(updateOrder)
	.delete(deleteOrder);

module.exports = Router;
