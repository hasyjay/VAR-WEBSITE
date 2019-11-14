import dotenv from 'dotenv';
dotenv.config();

export const {
	NODE_ENV,
	PORT,
	MONGODB_URI,
	SALT,
	SECRET,
	SITE_URL,
	SENDGRID_KEY
} = process.env;
