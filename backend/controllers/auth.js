const asyncHandler = require('../utils/asyncHandler');
const Status = require('../utils/statusEnum');
const User = require('../models/user');
const sendResponse = require('../utils/sendResponse');
const ErrorHandler = require('../utils/ErrorHandler');
const { sendResetEmail } = require('../utils/email');
const crypto = require('crypto');

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

const setTokenCookie = (res, token) => {
	// eslint-disable-next-line no-magic-numbers
	const millisecondsInADay = 24 * 60 * 60 * 1000;
	const cookieExpireTime = process.env.COOKIE_EXPIRE * millisecondsInADay;

	const options = {
		expires: new Date(Date.now() + cookieExpireTime),
		httpOnly: true,
	};

	res.cookie(
		'token', token, options,
	);
};

const updateUserPassword = async (user, password) => {
	user.password = password;
	user.resetPasswordToken = undefined;
	user.resetPasswordTokenExpire = undefined;
	await user.save();
};

const generateResetPasswordToken = (token) => crypto
	.createHash('sha256')
	.update(token)
	.digest('hex');

const findUserByResetToken = async (token) => {
	const resetPasswordToken = generateResetPasswordToken(token);
	const resetPasswordTokenExpire = {
		$gt: Date.now(),
	};

	const user = await User.findOne({
		resetPasswordToken,
		resetPasswordTokenExpire,
	});

	return user;
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

	user.password = undefined;

	setTokenCookie(res, token);

	sendResponse(
		res, Status.ACCEPTED.code, Status.ACCEPTED.message, { token, user },
	);
});

exports.logoutUser = asyncHandler((req, res) => {
	res.cookie(
		'token', null, {
			expires: new Date(Date.now()),
			httpOnly: true,
		},
	);
	sendResponse(
		res, Status.OK.code, Status.OK.message,
		{ message: 'Logged out successfully' },
	);
});

exports.forgetPassword = asyncHandler(async (
	req, res, next,
) => {
	const { email } = req.body;

	if(!email) {
		return next(new ErrorHandler('Please provide email',
			Status.BAD_REQUEST.code));
	}

	const user = await User.findOne({ email });

	if(!user) {
		return next(new ErrorHandler('User not found',
			Status.NOT_FOUND.code));
	}

	const resetToken = user.getResetPasswordToken();

	await user.save({ validateBeforeSave: false });

	await sendResetEmail({ user, resetToken, req, res, next });
});

exports.resetPassword = asyncHandler(async (
	req, res, next,
) => {
	const user = await findUserByResetToken(req.params.token);

	if(!user) {
		return next(new ErrorHandler('Invalid token or token expired',
			Status.UNAUTHORIZED.code));
	}

	if(req.body.password !== req.body.confirmPassword) {
		return next(new ErrorHandler('Passwords do not match',
			Status.BAD_REQUEST.code));
	}
	await updateUserPassword(user, req.body.password);

	sendResponse(
		res, Status.ACCEPTED.code, Status.ACCEPTED.message,
		{ message: 'Password changed successfully' },
	);
});
