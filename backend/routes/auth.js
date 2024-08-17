const express = require('express');
const {
	registerUser,
	loginUser,
	logoutUser,
	forgetPassword,
} = require('../controllers/auth');

const Router = express.Router();

Router.route('/register').post(registerUser);

Router.route('/login').post(loginUser);
Router.route('/logout').get(logoutUser);
Router.route('/password/forget').post(forgetPassword);

module.exports = Router;
