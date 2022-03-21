import { Job, DoneCallback, Queue } from 'bull';
import { JOB_SAMPLE as JOB_NAME } from '@config/jobs';
import logger from '@common/logger';
import { QueueService } from '@common/queue/queue.service';

export interface ISampleJobData {
    name: string;
}

export class SampleJob {
    static async register(): Promise<Queue<ISampleJobData>> {
        logger.info(`Listening to queue: ${JOB_NAME}`);
        const queue = await QueueService.getQueue<ISampleJobData>(JOB_NAME);
        queue.process(SampleJob.handler);
        return queue;
    }

    static async handler(job: Job<ISampleJobData>, done: DoneCallback): Promise<void> {
        try {
            logger.debug(`Processing job ${JOB_NAME}-${job.id}`);

            const { name } = job.data;

            logger.info(`Hello: ${name}`);

            logger.debug(`Processed job ${JOB_NAME}-${job.id}`);
            done();
        } catch (error) {
            logger.error(`Process ${JOB_NAME} error: `, error);
            done(error);
        }
    }
}
