require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middleware/error');
const app = express();

app.use(express.json());
app.use(cookieParser());

const products = require('./routes/product');
const auth = require('./routes/auth');
const admin = require('./routes/admin');

app.use('/api', products);
app.use('/api/users', auth);
app.use('/api/admin', admin);

app.use(errorMiddleware);

module.exports = app;
