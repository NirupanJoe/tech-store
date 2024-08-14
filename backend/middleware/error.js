const ErrorHandler = require('../utils/ErrorHandler');
const Status = require('../utils/statusEnum');

const handleDevelopmentError = (err) => ({
	error: err,
	stack: err.stack,
});

const handleProductionError = (err) => {
	let error = { ...err };

	if(err.name === 'ValidationError') {
		const message = Object.values(err.errors)
			.map(({ message: errorMessage }) => errorMessage);

		error = new ErrorHandler(message, Status.BAD_REQUEST.code);
	}
	return { message: error.message || Status.INTERNAL_SERVER_ERROR.message };
};

const errorHandlers = {
	development: handleDevelopmentError,
	production: handleProductionError,
};

module.exports = (
	err, req, res, _next,
) => {
	const env = process.env.NODE_ENV;

	const handleError = errorHandlers[env] || handleProductionError;

	res.status(err.statusCode || Status.INTERNAL_SERVER_ERROR.code).json({
		success: false,
		message: err.message || Status.INTERNAL_SERVER_ERROR.message,
		...handleError(err),
	});
};
