const { Types } = require('mongoose');
const ErrorHandler = require('../utils/errorHandler');
const Status = require('../utils/statusEnum');

const validateObjectId = (id, next) => {
	if(!Types.ObjectId.isValid(id))
		return next(new ErrorHandler('Invalid ID', Status.BAD_REQUEST.code));

	return true;
};

module.exports = validateObjectId;
