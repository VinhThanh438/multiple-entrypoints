import eventbus from '@common/eventbus';
import logger from '@common/logger';
import { ISample } from '@common/sample/Sample';
import { EVENT_SAMPLE_CREATED } from '@common/sample/sample.event';

export class TrackingEvent {
    public static register(): void {
        // register handler
        eventbus.on(EVENT_SAMPLE_CREATED, TrackingEvent.SampleCreatedHandler);
    }

    private static async SampleCreatedHandler(sample: ISample): Promise<void> {
        logger.info(`Process push sample object to kafka: ${sample._id.toHexString()}`);
    }
}
