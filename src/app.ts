import express from 'express';

const app = express();

// Routes
// http methods
app.get('/', (req, res, next) => {
    res.json({message:"Welcom to library api"});
});

export default app;