/* eslint-disable no-underscore-dangle */
import jwt from 'jsonwebtoken';
import { SECRET } from '../config';

// Acquire token from request headers Authorization field
export const tokenExtractor = (request, response, next) => {
	const authorization = request.get('authorization');
	if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
		request.token = authorization.substring(7);
	} else {
		request.token = null;
	}
	next();
};

export const encodeJWT = user => {
	return jwt.sign({
		sub: user._id,
		expiresIn: 1000 * 60 * 60 * 2 // Expires in two hours
	}, SECRET);
};

export const decodedToken = (token) => jwt.verify(token, SECRET);
