const asyncHandler = require('../utils/asyncHandler');
const Status = require('../utils/statusEnum');
const User = require('../models/user');
const sendResponse = require('../utils/sendResponse');
const ErrorHandler = require('../utils/ErrorHandler');
const { sendResetEmail } = require('../utils/email');
const {
	validateLoginFields,
	validateUserCredentials,
	setTokenCookie,
	updateUserPassword,
	findUserByResetToken,
	checkUserExists,
	buildUserData,
	findUserById,
} = require('../helper/auth');
const validateObjectId = require('../utils/validateObjectId');

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
	const token = user.getJwtToken(user);

	setTokenCookie(res, token);

	sendResponse(
		res, Status.ACCEPTED.code, Status.ACCEPTED.message,
		{ message: 'Password changed successfully', user: user, token: token },
	);
});

exports.getUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user.id);

	sendResponse(
		res, Status.OK.code, Status.OK.message, { user },
	);
});

exports.updateUserPassword = asyncHandler(async (
	req, res, next,
) => {
	const user = await User.findById(req.user.id).select('+password');

	const isValid = await validateUserCredentials(
		user, req.body.oldPassword, next,
	);

	if(!isValid)
		return;

	if(req.body.oldPassword === req.body.newPassword) {
		const message = 'New password cannot be same as old password';

		return next(new ErrorHandler(message, Status.BAD_REQUEST.code));
	}

	user.password = req.body.newPassword;
	await user.save();

	sendResponse(
		res, Status.ACCEPTED.code, Status.ACCEPTED.message,
		{ message: 'Password changed successfully' },
	);
});

exports.updateUserProfile = asyncHandler(async (req, res) => {
	const newData = {
		name: req.body.name,
		email: req.body.email,
	};
	const user = await User.findByIdAndUpdate(
		req.user.id, newData, {
			new: true,
			runValidators: true,
		},
	);

	sendResponse(
		res, Status.OK.code, Status.OK.message, { user },
	);
});

exports.getAllUsers = asyncHandler(async (req, res) => {
	const users = await User.find();

	sendResponse(
		res, Status.OK.code, Status.OK.message, { users },
	);
});

exports.getUserById = asyncHandler(async (
	req, res, next,
) => {
	if(!validateObjectId(req.params.id, next))
		return;

	const user = await checkUserExists(req.params.id, next);

	if(!user)
		return;

	sendResponse(
		res, Status.OK.code, Status.OK.message, { user },
	);
});

exports.updateUser = asyncHandler(async (
	req, res, next,
) => {
	if(!validateObjectId(req.params.id, next))
		return;

	let user = await findUserById(req.params.id, next);

	if(!user)
		return;

	const newData = buildUserData(req);

	user = await User.findByIdAndUpdate(
		req.params.id, newData, {
			new: true,
			runValidators: true,
		},
	);

	sendResponse(
		res, Status.OK.code, Status.OK.message, { user },
	);
});

exports.deleteUser = asyncHandler(async (
	req, res, next,
) => {
	if(!validateObjectId(req.params.id, next))
		return;

	const user = await User.findByIdAndDelete(req.params.id);

	if(!user) {
		return next(new ErrorHandler('User not found',
			Status.NOT_FOUND.code));
	}

	sendResponse(
		res, Status.OK.code, Status.OK.message,
		{ message: 'User deleted successfully' },
	);
});
