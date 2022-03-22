import { Request, NextFunction, Response } from 'express';
import { SampleService } from '@common/sample/sample.service';
import { ICreateSampleRequest, IListSampleRequest } from '@common/sample/sample.request';

export class SampleController {
    static async list(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const query = req.query as any;

            const result = await SampleService.list(query as IListSampleRequest);

            res.sendJson({
                data: result.map((element) => element.transform()),
            });
        } catch (error) {
            next(error);
        }
    }

    static async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const body = req.body as any;

            const result = await SampleService.create(body as ICreateSampleRequest);

            res.sendJson({
                data: result.transform(),
            });
        } catch (error) {
            next(error);
        }
    }
}
