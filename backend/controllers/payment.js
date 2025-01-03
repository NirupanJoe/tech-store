
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const asyncHandler = require('../utils/asyncHandler');
const Status = require('../utils/statusEnum');

const centsPerRupee = 100;

exports.processPayment = asyncHandler(async (req, res) => {
	const myPayment = await stripe.paymentIntents.create({
		amount: req.body.amount * centsPerRupee,
		currency: 'inr',
		metadata: {
			company: 'Ecommerce',
		},
	});

	res.status(Status.OK.code).json({
		success: true,
		client_secret: myPayment.client_secret,
	});
});

exports.sendStripeApiKey = asyncHandler((req, res) => {
	res.status(Status.OK.code).json({
		stripeApiKey: process.env.STRIPE_API_KEY,
	});
});
