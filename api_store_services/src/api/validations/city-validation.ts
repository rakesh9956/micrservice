import Joi from 'joi';

export const citySchema = Joi.object({
    city: Joi.string().required(),
    cityCode: Joi.number().required(),
    activeFlag: Joi.boolean().required(),
    deleteFlag: Joi.boolean().required(),
    createdBy: Joi.string().default(false),
    creationDate: Joi.date().default(() => new Date(),),
    modifiedBy: Joi.string().required(),
    modifiedDate: Joi.date().default(() => new Date(),)
});
