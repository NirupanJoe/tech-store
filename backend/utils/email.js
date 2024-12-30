const nodemailer = require('nodemailer');
const Status = require('./statusEnum');
const sendResponse = require('./sendResponse');
const ErrorHandler = require('./errorHandler');

const sendEmail = async (options) => {
	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: process.env.SMTP_PORT,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASSWORD,
		},
	});

	const message = {
		from: `${ process.env.FROM_NAME } <${ process.env.FROM_EMAIL }>`,
		to: options.email,
		subject: options.subject,
		text: options.message,
	};

	await transporter.sendMail(message);
};

const buildResetUrl = (req, resetToken) => {
	let baseURL = process.env.FRONTEND_URI;

	if(process.env.NODE_ENV === 'production')
		baseURL = `${ req.protocol }://${ req.get('host') }`;

	return `${ baseURL }/password/reset/${ resetToken }`;
};

const buildResetMessage = (req, resetToken) => {
	const resetUrl = buildResetUrl(req, resetToken);

	return `Your password reset token is as follows:\n\n${ resetUrl }\n\nIf you have not requested this email, then please ignore it.`;
};

const clearResetToken = async (user) => {
	user.resetPasswordToken = undefined;
	user.resetPasswordTokenExpire = undefined;
	await user.save({ validateBeforeSave: false });
};

const sendResetEmail = async ({ user, resetToken, req, res, next }) => {
	try {
		const message = buildResetMessage(req, resetToken);

		await sendEmail({
			email: user.email,
			subject: 'Password reset token',
			message: message,
		});

		sendResponse(
			res, Status.OK.code, Status.OK.message, {
				message: 'Password reset link sent to your email',
			},
		);
	}
	catch (error) {
		await clearResetToken(user);
		return next(new ErrorHandler(error.message,
			Status.INTERNAL_SERVER_ERROR.code));
	}
};

module.exports = {
	sendEmail,
	sendResetEmail,
};
