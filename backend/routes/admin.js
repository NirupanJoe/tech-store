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

const Router = express.Router();

Router.use(authorizeUser, authorizeAdmin);

Router.route('/users')
	.get(getAllUsers);

Router.route('/users/:id')
	.get(getUserById)
	.put(updateUser)
	.delete(deleteUser);

module.exports = Router;
