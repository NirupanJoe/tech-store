require('dotenv').config();
const Product = require('../models/product');
const products = require('../data/product.json');
const connectDatabase = require('../config/database');

connectDatabase();

const seedProduct = async () => {
	try {
		await Product.deleteMany({});
		console.log('Products deleted successfully');

		await Product.insertMany(products);
		console.log('Products seeded successfully');
	}
	catch (error) {
		console.log(error.message);
	}

	process.exit();
};

seedProduct();
