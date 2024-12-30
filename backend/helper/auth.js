const crypto = require('crypto');
const ErrorHandler = require('../utils/errorHandler');
const Status = require('../utils/statusEnum');
const User = require('../models/user');

const hoursInADay = 24;
const minutesInAnHour = 60;
const secondsInAMinute = 60;
const millisecondsInASecond = 1000;
const minutesInADay = hoursInADay * minutesInAnHour;
const secondsInADay = minutesInADay * secondsInAMinute;
const millisecondsInADay = secondsInADay * millisecondsInASecond;

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

const checkUserExists = async (id, next) => {
	const product = await User.findById(id);

	if(!product) {
		return next(new ErrorHandler('User not found',
			Status.NOT_FOUND.code));
	}

	return product;
};

const buildUserData = (req) => ({
	name: req.body.name,
	email: req.body.email,
	isAdmin: req.body.isAdmin,
});

module.exports = {
	validateLoginFields,
	validateUserCredentials,
	setTokenCookie,
	updateUserPassword,
	generateResetPasswordToken,
	findUserByResetToken,
	checkUserExists,
	buildUserData,
};
