import express from 'express';
import { validate } from 'express-validation';
import { list } from './sample.validator';
import { SampleController } from './sample.controller';
import { AuthMiddleware } from '@api/auth/auth.middleware';

const router = express.Router();

router.get('/auth', AuthMiddleware.requireAuth, validate(list, { context: true }), SampleController.list);

router.get('/', validate(list, { context: true }), SampleController.list);

export default router;
