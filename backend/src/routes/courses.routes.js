import express from 'express'
import { Router } from 'express'
import { getCourses } from '../controllers/courseControllers.js';

const router = express.Router();

router.get('/getcourses', getCourses,)


export default router