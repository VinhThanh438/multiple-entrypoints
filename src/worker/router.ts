import { JobHandler } from '@worker/interface';
import { Queue } from 'bull';
import { SampleRepeaterJob } from './sample/sample-repeater.job';
import { SampleJob } from './sample/sample.job';

export class Router {
    static async register(): Promise<Queue[]> {
        // List job to register here
        const queues: JobHandler[] = [SampleRepeaterJob, SampleJob];

        return Promise.all(queues.map((queue) => queue.register()));
    }
}
