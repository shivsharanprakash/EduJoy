import express from 'express';
import authMiddleware from '../Middleware/auhMiddleware.js';
import { getResource, getResourceById } from '../Controller/ResourceController.js';

const router=express.Router();
router.get('/',authMiddleware,getResource);
router.get('/:id',authMiddleware,getResourceById);

export default router;