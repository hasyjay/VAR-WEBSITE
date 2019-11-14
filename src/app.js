/* eslint-disable no-console */
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { errorHandler, unknownEndpoint, tokenExtractor } from './middlewares';
import { MONGODB_URI, NODE_ENV } from './config';
import { authRouter } from './controllers';
const app = express();

mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
})
	.then(() => {
		console.log('Connected to db');
	})
	.catch(err => {
		console.log('error connecting to database:', err.message);
	});

if (NODE_ENV === 'development') {
	app.use((req, res, next) => {
		console.log(req.method, '-', req.url);
		next();
	});
}

app.use(tokenExtractor);
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRouter);

app.use(unknownEndpoint);
app.use(errorHandler);


export default app;
