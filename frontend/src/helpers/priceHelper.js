import config from '../actions/config';

export const formatPrice = (price) => Number(price.toFixed(config.decimalPlaces));

export const formatCurrency = (amount) => `₹${ formatPrice(amount) }`;

export const getTotalPrice = (items) =>
	items.reduce((acc, item) => acc + item.data.price, 0);

export const getTotalDiscount = (items) =>
	items.reduce((acc, item) => acc + item.data.discount, 0);

export const getTotal = (items) =>
	items.reduce((acc, item) => formatPrice(acc + item.price), 0);
