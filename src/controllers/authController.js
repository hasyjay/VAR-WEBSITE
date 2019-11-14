/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import express from 'express';
import randomstring from 'randomstring';
import User from '../models/user';
import Profile from '../models/profile';
import {
	hashPassword,
	signupSchema
} from '../helpers';
import { encodeJWT } from '../middlewares';
const authRouter = express.Router();

// Signup A New User
authRouter.route('/signup')
	.post(async (req, res, next) => {
		const { username, email, password } = req.body;
		const lowerUsername = username.toLowerCase();
		const now = new Date();
		const validateData = {
			username: lowerUsername,
			email,
			password
		};
		const validRegister = signupSchema.validate(validateData);
		if (validRegister.error) {
			return next(validRegister.error);
		}
		try {
			const emailOrUsernameExists = await User.findOne({ email: validRegister.value.email }) || await User.findOne({ username: validRegister.value.username });
			if (emailOrUsernameExists) {
				return res.status(400).json({ success: false, message: 'Email or username already in use. Sign in instead?' });
			}

			const newUser = new User({
				email,
				username: lowerUsername,
				password: await hashPassword(password),
				secretToken: randomstring.generate(),
				secretTokenExpiry: now.getTime() + 1000 * 60 * 60 * 24 // Set to 24 hours
			});

			const newProfile = await Profile
				.create({
					user: newUser._id
				});
			newUser.profile = newProfile._id;
			await newUser.save();
			const token = encodeJWT(newUser);
			return res.status(201).json({ success: true, token });
		} catch (exception) {
			next(exception);
		}
	});

export default authRouter;
