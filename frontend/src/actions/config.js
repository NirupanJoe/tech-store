const config = {
	productsPerPage: 4,
	popularKeywords: [
		'Nebula P9',
		'Nebula Tab Y5',
	],
	maxSearchHistory: 4,
	priceOptions: [
		{ label: 'Up to ₹10000', value: { minPrice: 0, maxPrice: 10000 }},
		{ label: '₹10001–₹15000', value: { minPrice: 10001, maxPrice: 15000 }},
		{ label: '₹15001–₹20000', value: { minPrice: 15001, maxPrice: 20000 }},
		{ label: '₹20001–₹25000', value: { minPrice: 20001, maxPrice: 25000 }},
		{ label: '₹25001–₹30000', value: { minPrice: 25001, maxPrice: 30000 }},
		{ label: '₹30001–₹35000', value: { minPrice: 30001, maxPrice: 35000 }},
		{ label: '₹35001–₹40000', value: { minPrice: 35001, maxPrice: 40000 }},
		{ label: '₹40001–₹50000', value: { minPrice: 40001, maxPrice: 50000 }},
		{ label: 'Above ₹50000', value: { minPrice: 50001, maxPrice: Number.MAX_VALUE }},
	],
};

export default config;
