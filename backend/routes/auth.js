const express = require('express');
const {
	registerUser,
	loginUser,
	logoutUser,
	forgetPassword,
	resetPassword,
	getUserProfile,
	updateUserPassword,
} = require('../controllers/auth');
const { authorizeUser } = require('../middleware/authentication');

const Router = express.Router();

Router.route('/register').post(registerUser);

Router.route('/login').post(loginUser);
Router.route('/logout').get(logoutUser);

Router.route('/password/forget').post(forgetPassword);
Router.route('/password/reset/:token').post(resetPassword);
Router.route('/password/update').put(authorizeUser, updateUserPassword);

Router.route('/profile').get(authorizeUser, getUserProfile);

module.exports = Router;
