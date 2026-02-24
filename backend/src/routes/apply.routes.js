import express from 'express'
import { Router } from 'express'
import { createApply } from '../controllers/applyControllers.js';

const router = express.Router();

router.post('/apply', createApply,);


export default router