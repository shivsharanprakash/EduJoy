import getQuestion from "../Controller/QuestionController.js";
import express from 'express';
const router =express.Router();
router.get('/',getQuestion);

export default router;