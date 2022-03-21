import Sample, { ISample } from './Sample';
import { IListSampleRequest } from './sample.request';

export class SampleService {
    static async list(req: IListSampleRequest): Promise<ISample[]> {
        return Sample.find({}).limit(req.limit).exec();
    }
}
