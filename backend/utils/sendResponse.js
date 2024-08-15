const sendResponse = (
	res, statusCode, message, data = {},
) => {
	res.status(statusCode).json({
		status: message,
		...data,
	});
};

module.exports = sendResponse;
