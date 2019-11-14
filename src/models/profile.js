import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	picture: { type: String },
	fullname: {
		type: { type: String }
	},
	servicesProvided: [{ type: String }],
	constactInformation: [{ type: String }],
	aboutMe: {
		type: String
	},
	rating: { type: Number },
	reviews: [{ type: String }]
});

export default mongoose.model('Profile', profileSchema);
