import { KafkaMessage } from 'kafkajs';

export interface MessageHandler {
    match(topic: string, message: KafkaMessage): boolean;
    getTopic(): string;
    getEvents(): string[];
    getName(): string;
    process(topic: string, partition: number, message: KafkaMessage, parsedMessage: unknown): Promise<void>;
}
