/* eslint-disable consistent-return */
/* eslint-disable no-console */
import bcrypt from 'bcryptjs';
const saltRounds = 10;

export const hashPassword = async rawPass => {
	try {
		const password = await bcrypt.hash(rawPass, saltRounds);
		return password;
	} catch (error) {
		console.log(error.message);
	}
};

export const comparePassword = async (rawPass, user) => {
	try {
		const isValid = await bcrypt.compare(rawPass, user.password);
		return isValid;
	} catch (error) {
		console.log(error.message);
	}
};
