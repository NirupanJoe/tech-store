const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
	color: {
		type: String,
		required: [true, 'Please Enter Variant Color'],
	},
	colorName: {
		type: String,
		required: [true, 'Please Enter Variant Color Name'],
	},
	storage: {
		type: String,
		required: [true, 'Please Enter Variant Storage'],
	},
	ram: {
		type: String,
		required: [true, 'Please Enter Variant RAM'],
	},
	imageUrls: {
		type: [String],
		required: [true, 'Please Enter Variant Image Urls'],
	},
	price: {
		type: Number,
		required: [true, 'Please Enter Price'],
		min: 0,
	},
	discountedPrice: {
		type: Number,
		min: 0,
	},
	discount: {
		type: Number,
		required: [true, 'Please Enter Discount Amount'],
	},
});

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please Enter Product Name'],
		trim: true,
	},
	model: {
		type: String,
		required: [true, 'Please Enter Product Model'],
		trim: true,
	},
	description: {
		type: String,
		required: [true, 'Please Enter Product Description'],
		trim: true,
	},
	specifications: {
		screenSize: String,
		resolution: String,
		processor: String,
		battery: String,
		camera: String,
		weight: String,
		os: String,
	},
	category: {
		type: String,
		require: [true, 'Please Enter Product Category'],
		enum: ['smartphone', 'tablet', 'laptop', 'wearable', 'accessory'],
	},
	stock: {
		type: Number,
		required: true,
		min: 0,
	},
	imageUrls: {
		type: [String],
		required: [true, 'Please Enter Product Image Urls'],
	},
	releaseDate: {
		type: Date,
	},
	rating: {
		type: Number,
		min: 0,
		max: 5,
	},
	reviewsCount: {
		type: Number,
		default: 0,
	},
	reviews: [{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		comment: String,
		rating: {
			type: Number,
			min: 0,
			max: 5,
		},
		date: {
			type: Date,
			default: Date.now,
		},
	}],
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	variants: [variantSchema],
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
