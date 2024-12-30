require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const errorMiddleware = require('./middleware/error');
const app = express();

app.use(express.json());
app.use(cookieParser());

const products = require('./routes/product');
const auth = require('./routes/auth');
const admin = require('./routes/admin');
const order = require('./routes/order');

app.use('/api', products);
app.use('/api/users', auth);
app.use('/api/admin', admin);
app.use('/api/orders', order);

if(process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../frontend/dist')));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname,
			'../frontend/dist/index.html'));
	});
}

app.use(errorMiddleware);

module.exports = app;
