import { Router } from 'express';
import { createOrder, captureOrder } from './controller';

export const router = Router();

router.post('/create-order', createOrder);
router.post('/capture-order', captureOrder);
