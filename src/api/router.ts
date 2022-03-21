import express, { Request, Response } from 'express';
import { NODE_ENV } from '@config/environment';
import sampleRoutes from './sample/sample.route';

const router = express.Router();

/**
 * GET /status
 */
router.get('/status', (req: Request, res: Response) => res.send('OK'));

router.use('/sample', sampleRoutes);

export default router;
