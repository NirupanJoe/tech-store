const User = require('../models/user');
const ErrorHandler = require('../utils/ErrorHandler');
const asyncHandler = require('../utils/asyncHandler');
const Status = require('../utils/statusEnum');
const jwt = require('jsonwebtoken');

exports.authorizeUser = asyncHandler(async (
	req, res, next,
) => {
	const { token } = req.cookies;

	if(!token) {
		return next(new ErrorHandler('Login first to access this route',
			Status.UNAUTHORIZED.code));
	}

	const decoded = jwt.verify(token, process.env.JWT_SECRET);

	req.user = await User.findById(decoded.id);

	next();
});

exports.authorizeAdmin = asyncHandler((
	req, res, next,
) => {
	if(!req.user.isAdmin) {
		return next(new ErrorHandler('Admin only access this route',
			Status.UNAUTHORIZED.code));
	}
	next();
});
