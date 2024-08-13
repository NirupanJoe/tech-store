require('dotenv').config();
const express = require('express');
const errorMiddleware = require('./middleware/error');
const app = express();

app.use(express.json());

const products = require('./routes/product');

app.use('/api', products);

app.use(errorMiddleware);

module.exports = app;
