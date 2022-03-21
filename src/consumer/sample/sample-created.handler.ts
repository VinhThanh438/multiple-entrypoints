import { EventName, TopicName } from '@common/event-source/event-source.topic';
import { KafkaMessage } from 'kafkajs';
import logger from '@common/logger';

export class SampleCreatedHandler {
    static getName(): string {
        return 'SampleCreatedHandler';
    }
    static getTopic(): string {
        return TopicName.SAMPLE;
    }
    static getEvents(): string[] {
        return [EventName.SAMPLE__CREATED];
    }
    static match(topic: string, message: KafkaMessage): boolean {
        if (topic !== SampleCreatedHandler.getTopic()) {
            return false;
        }
        const headers = message.headers;
        if (!headers || !headers.event) {
            return false;
        }
        return SampleCreatedHandler.getEvents().includes(headers.event.toString());
    }
    static async process(
        topic: string,
        partition: number,
        message: KafkaMessage,
        parsedMessage: unknown,
    ): Promise<void> {
        logger.debug('Processing message', { parsedMessage });

        return;
    }
}
