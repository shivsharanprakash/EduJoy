import express from 'express';
import { login,signin } from '../Controller/UserController.js';
const router=express.Router();
router.post('/signin',signin);
router.post('/login',login);

export default router;
