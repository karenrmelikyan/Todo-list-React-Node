import express from 'express';
import { get, add, update, remove } from '../controllers/todo.mjs';

const router = express.Router();

router.get('/', get);

router.post('/', add);

router.put('/', update);

router.delete('/', remove);

export default router;

