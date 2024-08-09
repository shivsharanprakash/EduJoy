import express from 'express';
const router =express.Router();
import getQuizzes from '../Controller/QuizController.js';

router.get('/',getQuizzes);
export default router;