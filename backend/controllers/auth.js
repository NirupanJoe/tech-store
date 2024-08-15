const asyncHandler = require('../utils/asyncHandler');
const Status = require('../utils/statusEnum');
const User = require('../models/user');
const sendResponse = require('../utils/sendResponse');

exports.registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	if(!name || !email || !password) {
		return res
			.status(Status.BAD_REQUEST.code)
			.json({ message: 'Please provide all required fields' });
	}
	const user = await User.create({ name, email, password });

	sendResponse(
		res, Status.CREATED.code, Status.CREATED.message, { user },
	);
});
