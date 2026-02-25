import express from 'express';
import cors from 'cors';
import env from 'dotenv'

const app = express();
app.use(express.json());

env.config();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));


app.get('/api/testing', (req, res) => {
    res.status(200).send('ssi backend is working');
})


// initializing routes...
import applyRoutes from './routes/apply.routes.js'
app.use('/api', applyRoutes);


import courseRoutes from './routes/courses.routes.js'
app.use('/api', courseRoutes)

import eventRoutes from './routes/events.routes.js'
app.use('/api', eventRoutes)

import resultRoutes from './routes/results.routes.js'
app.use('/api', resultRoutes);

import careerRoutes from './routes/careers.routes.js'
app.use('/api', careerRoutes);



export default app;
