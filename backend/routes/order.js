const express = require('express');
const {
	authorizeUser,
} = require('../middleware/authentication');
const { addOrderItems } = require('../controllers/order');

const router = express.Router();

router.use(authorizeUser);

router.route('').post(addOrderItems);

module.exports = router;
