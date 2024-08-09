import express from 'express'
import getScienceQuiz from '../Controller/Sciencecontroller.js';
const router =express.Router();
router.get('/',getScienceQuiz)
export default router