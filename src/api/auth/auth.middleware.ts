import { Request, Response, NextFunction } from 'express';
import { APIError } from '@common/error/api.error';
import { ErrorCode } from '@config/errors';
import httpStatus from 'http-status';

export class AuthMiddleware {
    public static async requireAuth(req: Request, res: Response, next: NextFunction) {
        try {
            const token = req.headers.authorization;
            if (!token) {
                throw new APIError({
                    message: 'Token is missing',
                    status: httpStatus.UNAUTHORIZED,
                    errorCode: ErrorCode.REQUEST_UNAUTHORIZED,
                });
            }
            // process auth
            next();
        } catch (error) {
            next(error);
        }
    }
}
