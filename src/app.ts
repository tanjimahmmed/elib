import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './middlewares/globalErrorHandler';
import userRouter from './user/userRouter';
import bookRouter from './book/bookRouter';
import { config } from './config/config';

const app = express();

app.use(cors({
    origin: config.frontendDomain,
}))
app.use(express.json())

// Routes
// http methods
app.get('/', (req, res, next) => {
    res.json({message:"Welcom to library api"});
});

app.use("/api/users", userRouter);
app.use("/api/books", bookRouter);

// global error handler
app.use(globalErrorHandler)


export default app;