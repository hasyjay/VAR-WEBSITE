/* eslint-disable consistent-return */

export const errorHandler = (error, request, response, next) => {
	if (error.name === 'CastError' && error.kind === 'ObjectId') {
		return response.status(400).send({ error: 'malformatted id' });
	} if (error.name === 'ValidationError') {
		return response.status(400).json({ error: error.message });
	} if (error.name === 'TokenExpiredError' || error.name === 'JsonWebTokenError') {
		return response.status(401).send({ error: 'Token expired or invalid. Sign in to continue' });
	}
	next(error);
};
