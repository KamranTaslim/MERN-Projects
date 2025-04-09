import express from 'express';
import {config} from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connectDB } from './database/dbConnection.js';
import { errorMiddleware } from './middleware/error.js';

export const app = express();

config();


app.use(cors({
    origin:[process.env.FRONTEND_URL],
    credentials:true,//when we are using cookies we need to set this to true
}))

app.use(cookieParser());
app.use(express.json());// APIs where the client sends JSON data in the request body.
app.use(express.urlencoded({extended:true}));// for data parsing

connectDB();

app.use(errorMiddleware);// this should be the last middleware in the stack and no need to call it 