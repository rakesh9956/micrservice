import Joi from 'joi';

export const productSchema = Joi.object({
  grocery: Joi.string().allow('').required(),
  mobiles: Joi.string().required(),
  fashion: Joi.string().required(),
  electronics: Joi.string().required(),
  deleteFlag: Joi.boolean().default(false),
  createdBy: Joi.string().required(),
  creationDate: Joi.date().default(() => new Date(),),
  modifiedBy: Joi.string().required(),
  modifiedDate: Joi.date().default(() => new Date(),)
});
