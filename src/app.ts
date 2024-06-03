import express, { NextFunction, Request, Response } from 'express';
import globalErrorHandler from './middlewares/globalErrorHandler';
import userRouter from './user/userRouter';

const app = express();
app.use(express.json())

// Routes
// http methods
app.get('/', (req, res, next) => {
    res.json({message:"Welcom to library api"});
});

app.use("/api/users", userRouter);

// global error handler
app.use(globalErrorHandler)


export default app;