const mongoose = require('mongoose');

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
	price: {
		type: Number,
		required: [true, 'Please Enter Product Price'],
		min: 0,
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
		ram: String,
		storage: String,
		battery: String,
		camera: String,
		weight: String,
		os: String,
	},
	category: {
		type: String,
		require: [true, 'Please Enter Product Category'],
		enum: ['Smartphone', 'Tablet', 'Laptop', 'Wearable', 'Accessory'],
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
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
