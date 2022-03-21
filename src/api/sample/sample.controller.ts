import { Request, NextFunction, Response } from 'express';
import { SampleService } from '@common/sample/sample.service';
import { IListSampleRequest } from '@common/sample/sample.request';

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
}
