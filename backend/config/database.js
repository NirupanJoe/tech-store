const mongoose = require('mongoose');

const connectDatabase = async () => {
	try {
		const { DB_URI: uri } = process.env;
		const { connection: { host }} = await mongoose.connect(uri);

		console.log(`MongoDB is connected to the host: ${ host } `);
	}
	catch (err) {
		console.log(`Database Not Connected ${ err }`);
	}
};

module.exports = connectDatabase;
