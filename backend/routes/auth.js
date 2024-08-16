const express = require('express');
const { registerUser, loginUser } = require('../controllers/auth');
const Router = express.Router();

Router.route('/register').post(registerUser);

Router.route('/login').post(loginUser);

module.exports = Router;
