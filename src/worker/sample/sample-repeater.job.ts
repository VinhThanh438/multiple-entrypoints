import { Job, DoneCallback, Queue } from 'bull';
import { JOB_SAMPLE_REPEATER as JOB_NAME } from '@config/jobs';
import logger from '@common/logger';
import { QueueService } from '@common/queue/queue.service';

export class SampleRepeaterJob {
    static async register(): Promise<Queue<unknown>> {
        logger.info(`Listening to queue: ${JOB_NAME}`);
        const queue = await QueueService.getQueue<unknown>(JOB_NAME);

        const timeDelayToCleanJob = 5000;
        const jobStatus = 'delayed';
        const jobOpts = {
            repeat: { cron: '* * * * *' },
        };
        await queue.clean(timeDelayToCleanJob, jobStatus);
        await queue.add({ job: JOB_NAME }, jobOpts);

        await queue.process(SampleRepeaterJob.handler);
        return queue;
    }

    static async handler(job: Job<unknown>, done: DoneCallback): Promise<void> {
        try {
            logger.debug(`Processing job ${JOB_NAME}-${job.id}`);

            // Make some noise
            logger.info("I'm repeater");

            logger.debug(`Processed job ${JOB_NAME}-${job.id}`);
            done();
        } catch (error) {
            logger.error(`Process ${JOB_NAME} error: `, error);
            done(error);
        }
    }
}
