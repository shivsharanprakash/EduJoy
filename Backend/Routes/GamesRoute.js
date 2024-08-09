import express, { Router } from 'express';
import getGames from '../Controller/GamesController.js';

const router=express.Router();
router.get('/',getGames);
export default router;
