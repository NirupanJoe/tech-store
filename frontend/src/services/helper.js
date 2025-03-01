
const helper = {
	formatPrice: (price) => new Intl.NumberFormat('en-IN', {
		style: 'currency',
		currency: 'INR',
	}).format(price),

	formatDate: (dateString) => new Date(dateString).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}),
};

export default helper;
