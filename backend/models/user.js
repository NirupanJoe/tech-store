const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const saltRounds = 10;
const BYTES = 20;
const minutesInAnHour = 60;
const millisecondsInASecond = 1000;
const millisecondsInAMinute = minutesInAnHour * millisecondsInASecond;

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please Enter Your Name'],
		trim: true,
	},
	email: {
		type: String,
		required: [true, 'Please Enter Your Email'],
		trim: true,
		unique: true,
		validate: [validator.isEmail, 'Please Enter A Valid Email'],
	},
	password: {
		type: String,
		required: [true, 'Please Enter Your Password'],
		trim: true,
		select: false,
	},
	resetPasswordToken: String,
	resetPasswordTokenExpire: Date,
	isAdmin: {
		type: Boolean,
		default: false,
	},
}, {
	timestamps: true,
});

const hashingPassword = async function (next) {
	if(!this.isModified('password'))
		next();

	this.password = await bcrypt.hash(this.password, saltRounds);
};

userSchema.pre('save', hashingPassword);

userSchema.methods.getJwtToken = function getJwtToken () {
	return jwt.sign(
		{ id: this.id }, process.env.JWT_SECRET, {
			expiresIn: process.env.JWT_EXPIRE,
		},
	);
};

const comparePassword = async function (enteredPassword) {
	const isMatch = await bcrypt.compare(enteredPassword, this.password);

	return isMatch;
};

userSchema.methods.comparePassword = comparePassword;

userSchema.methods.getResetPasswordToken = function getResetPasswordToken () {
	// NOTE: Generate the reset token
	const resetToken = crypto.randomBytes(BYTES).toString('hex');

	// NOTE: Hash and set the resetPasswordToken
	this.resetPasswordToken = crypto
		.createHash('sha256')
		.update(resetToken)
		.digest('hex');

	// NOTE: Set token expiration time
	this.resetPasswordTokenExpire = Date.now()
			+ (process.env.RESET_PASSWORD_EXPIRE * millisecondsInAMinute);

	return resetToken;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
