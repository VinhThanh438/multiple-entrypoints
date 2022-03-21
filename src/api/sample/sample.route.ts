import express from 'express';
import { validate } from 'express-validation';
import { list } from './sample.validator';
import { SampleController } from './sample.controller';

const router = express.Router();

router.get('/', validate(list, { context: true }), SampleController.list);

export default router;
