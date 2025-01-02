const express = require('express');
const router = express.Router();
const {
	processPayment,
	sendStripeApiKey,
} = require('../controllers/payment');
const { authorizeUser } = require('../middleware/authentication');

router.use(authorizeUser);

router.route('/payment/process').post(processPayment);
router.route('/stripeapikey').get(sendStripeApiKey);

module.exports = router;
