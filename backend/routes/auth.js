const express = require('express');
const {
	registerUser,
	loginUser,
	logoutUser,
	forgetPassword,
	resetPassword,
} = require('../controllers/auth');

const Router = express.Router();

Router.route('/register').post(registerUser);

Router.route('/login').post(loginUser);
Router.route('/logout').get(logoutUser);

Router.route('/password/forget').post(forgetPassword);
Router.route('/password/reset/:token').post(resetPassword);

module.exports = Router;
