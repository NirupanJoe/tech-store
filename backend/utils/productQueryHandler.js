const Product = require('../models/product');

const defaultLimit = 10;

const buildNameQuery = (keyword) => {
	if(keyword)
		return { name: { $regex: keyword, $options: 'i' }};

	return {};
};

const buildCategoryQuery = (category) => {
	if(category)
		return { category };

	return {};
};

const buildPriceQuery = (minPrice, maxPrice) => {
	const priceQuery = {};

	if(minPrice)
		priceQuery.$gte = minPrice;
	if(maxPrice)
		priceQuery.$lte = maxPrice;
	return Object.keys(priceQuery).length > 0 ? { price: priceQuery } : {};
};

const buildQuery = ({ keyword, category, minPrice, maxPrice }) => ({
	...buildNameQuery(keyword),
	...buildCategoryQuery(category),
	...buildPriceQuery(minPrice, maxPrice),
});

const paginateResults = async (
	queryObject, page = 1, limit = defaultLimit,
) => {
	const totalProducts = await Product.countDocuments(queryObject);
	const products = await Product.find(queryObject)
		.skip((page - 1) * limit)
		.limit(Number(limit));

	const returnedProductCount = products.length;

	return { products, totalProducts, returnedProductCount };
};

module.exports = {
	buildQuery,
	paginateResults,
};
