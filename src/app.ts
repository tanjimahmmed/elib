import express, { NextFunction, Request, Response } from 'express';
import globalErrorHandler from './middlewares/globalErrorHandler';

const app = express();

// Routes
// http methods
app.get('/', (req, res, next) => {
    res.json({message:"Welcom to library api"});
});

// global error handler
app.use(globalErrorHandler)


export default app;