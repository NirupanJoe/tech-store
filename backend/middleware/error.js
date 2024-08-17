const ErrorHandler = require('../utils/ErrorHandler');
const Status = require('../utils/statusEnum');

const errorNamesHandlers = {
	ValidationError: (err) => {
		const message = Object.values(err.errors)
			.map(({ message: errorMessage }) => errorMessage);

		return new ErrorHandler(message, Status.BAD_REQUEST.code);
	},

	JSONWebTokenError: () => {
		const message = 'JSON Web Token is invalid. Try again';

		return new ErrorHandler(message, Status.UNAUTHORIZED.code);
	},

	TokenExpiredError: () => {
		const message = 'JSON Web Token is expired. Try again';

		return new ErrorHandler(message, Status.UNAUTHORIZED.code);
	},
};

const errorCodesHandlers = {
	11000: (err) => {
		const message = `Duplicate field ${ Object.keys(err.keyValue) } value entered`;

		return new ErrorHandler(message, Status.BAD_REQUEST.code);
	},
};

const handleDevelopmentError = (err) => ({
	error: err,
	stack: err.stack,
});

const handleProductionError = (err) => {
	let error = { ...err };

	if(errorNamesHandlers[err.name])
		error = errorNamesHandlers[err.name](err);

	if(errorCodesHandlers[error.code])
		error = errorCodesHandlers[err.code](err);

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
