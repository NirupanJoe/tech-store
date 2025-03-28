const mongoose = require('mongoose');
const validator = require('validator');

const orderSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	orderItems: [
		{
			productId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Product', required: true,
			},
			variantId: { type: mongoose.Schema.Types.ObjectId, required: true },
			name: { type: String, required: true },
			qty: { type: Number, required: true, default: 1 },
			price: { type: Number, required: true },
			image: { type: String, required: true },
			storage: { type: String, required: true },
			ram: { type: String, required: true },
			color: { type: String, required: true },
			colorName: { type: String, required: true },
			product: { type: Object },
		},
	],
	shippingAddress: {
		address: { type: String, required: true },
		city: { type: String, required: true },
		postalCode: { type: String, required: true },
		state: { type: String, required: true },
		country: { type: String, required: true },
		email: {
			type: String,
			validate: [validator.isEmail, 'Please Enter A Valid Email'],
		},
		phoneNo: {
			type: String,
			required: true,
			validate: [
				validator.isMobilePhone,
				'Please Enter A Valid Phone Number',
			],
		},
		alternativePhoneNo: {
			type: String,
			validate: [
				validator.isMobilePhone,
				'Please Enter A Valid Phone Number',
			],
		},
	},
	paymentMethod: { type: String, required: true },
	paymentResult: {
		id: { type: String },
		status: { type: String },
		updateTime: { type: Date },
		emailAddress: { type: String },
	},
	itemsPrice: { type: Number, required: true, default: 0.0 },
	taxPrice: { type: Number, required: true, default: 0.0 },
	shippingPrice: { type: Number, required: true, default: 0.0 },
	totalPrice: { type: Number, required: true, default: 0.0 },
	isPaid: { type: Boolean, required: true, default: false },
	paidAt: { type: Date },
	isDelivered: { type: Boolean, required: true, default: false },
	deliveredAt: { type: Date },
}, {
	timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
