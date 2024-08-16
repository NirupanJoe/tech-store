const asyncHandler = require('../utils/asyncHandler');
const Status = require('../utils/statusEnum');
const User = require('../models/user');
const sendResponse = require('../utils/sendResponse');
const ErrorHandler = require('../utils/ErrorHandler');

const validateLoginFields = (
	email, password, next,
) => {
	if(!email || !password) {
		return next(new ErrorHandler('Please provide all required fields',
			Status.BAD_REQUEST.code));
	}
};

const validateUserCredentials = async (
	user, password, next,
) => {
	if(!user) {
		return next(new ErrorHandler('Invalid credentials',
			Status.UNAUTHORIZED.code));
	}

	const isPasswordMatched = await user.comparePassword(password);

	if(!isPasswordMatched) {
		return next(new ErrorHandler('Invalid credentials',
			Status.UNAUTHORIZED.code));
	}

	return true;
};

exports.registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	if(!name || !email || !password) {
		return res
			.status(Status.BAD_REQUEST.code)
			.json({ message: 'Please provide all required fields' });
	}
	const user = await User.create({ name, email, password });
	const token = user.getJwtToken();

	sendResponse(
		res, Status.CREATED.code, Status.CREATED.message, { token, user },
	);
});

exports.loginUser = asyncHandler(async (
	req, res, next,
) => {
	const { email, password } = req.body;

	validateLoginFields(
		email, password, next,
	);

	const user = await User.findOne({ email }).select('+password');

	const isValid = await validateUserCredentials(
		user, password, next,
	);

	if(!isValid)
		return;

	const token = user.getJwtToken(user);

	sendResponse(
		res, Status.OK.code, Status.OK.message, { token, user },
	);
});
