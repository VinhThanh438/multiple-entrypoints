export enum TopicName {
    SAMPLE = 'sample',
}

export enum EventKey {}

export enum EventName {
    SAMPLE__CREATED = 'created',
}

export interface IEventTopic {
    event: string;
    topic: TopicName;
}

export const EventTopics: Map<EventKey, IEventTopic> = new Map();
