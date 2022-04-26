import express from 'express';
import { getData, addData, updateData, deleteData } from '../controllers/todo.mjs';

const router = express.Router();

router.get('/', getData);

router.post('/', addData);

router.put('/', updateData);

router.delete('/', deleteData);

export default router;

