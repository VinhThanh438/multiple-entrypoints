import eventbus from '@common/eventbus';
import Sample, { ISample } from './Sample';
import { EVENT_SAMPLE_CREATED } from './sample.event';
import { ICreateSampleRequest, IListSampleRequest } from './sample.request';

export class SampleService {
    static async list(req: IListSampleRequest): Promise<ISample[]> {
        return Sample.find({}).limit(req.limit).exec();
    }

    static async create(req: ICreateSampleRequest): Promise<ISample> {
        const sample = new Sample(req);
        await sample.save();
        eventbus.emit(EVENT_SAMPLE_CREATED, sample);
        return sample;
    }
}
