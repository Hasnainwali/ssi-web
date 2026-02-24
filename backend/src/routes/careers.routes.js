import express from 'express'
import { Router } from 'express'
import { getCareers } from '../controllers/careerControllers.js';

const router = express.Router();

router.post('/apply', getCareers,);


export default router