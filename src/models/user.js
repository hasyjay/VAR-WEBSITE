/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	email: { type: String },
	username: { type: String },
	password: { type: String },
	secretToken: String,
	secretTokenExpiry: { type: Date },
	active: { type: Boolean, default: false },
	deactivated: { type: Boolean, default: false },
	resetPasswordToken: { type: String },
	resetPasswordExpiry: { type: Date },
	profile: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Profile'
	}
});

userSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
		delete returnedObject.password;
	}
});

export default mongoose.model('User', userSchema);
