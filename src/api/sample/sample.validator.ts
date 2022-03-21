import { Joi, schema } from 'express-validation';

export const list: schema = {
    query: Joi.object({
        limit: Joi.number().integer().min(1).max(100).default(10),
    }),
};
