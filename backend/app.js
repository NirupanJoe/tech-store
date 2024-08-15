require('dotenv').config();
const express = require('express');
const errorMiddleware = require('./middleware/error');
const app = express();

app.use(express.json());

const products = require('./routes/product');
const auth = require('./routes/auth');

app.use('/api', products);
app.use('/api/users', auth);

app.use(errorMiddleware);

module.exports = app;
