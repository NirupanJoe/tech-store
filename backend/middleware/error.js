const Status = require('../utils/statusEnum');

module.exports = (
	err, req, res, _next,
) => {
	res.status(err.statusCode || Status.INTERNAL_SERVER_ERROR.code).json({
		success: false,
		message: err.message || Status.INTERNAL_SERVER_ERROR.message,
		error: err,
		stack: err.stack,
	});
};
