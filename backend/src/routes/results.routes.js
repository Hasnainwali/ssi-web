import express from 'express'
import { Router } from 'express'
import { getResults } from '../controllers/resultControllers.js';

const router = express.Router();

router.get('/getresults', getResults,)


export default router