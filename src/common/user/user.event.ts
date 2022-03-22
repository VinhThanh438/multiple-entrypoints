import eventbus from '@common/eventbus';
import logger from '@common/logger';
import { ISample } from '@common/sample/Sample';
import { EVENT_SAMPLE_CREATED } from '@common/sample/sample.event';

export class UserEvent {
    public static register(): void {
        // register handler
        eventbus.on(EVENT_SAMPLE_CREATED, UserEvent.SampleCreatedHandler);
    }

    private static async SampleCreatedHandler(sample: ISample): Promise<void> {
        logger.info(`Process increase sample counter for user: ${sample._id.toHexString()}`);
    }
}
