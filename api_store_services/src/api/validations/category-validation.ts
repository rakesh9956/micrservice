import Joi from 'joi';
import { mediaTypeModelSchema } from './mediaType-validation';
import { seoModelSchema } from './seo-validation';

export const categoryModelSchema = Joi.object({
  businessUnitId: Joi.string().required(),
  categoryName: Joi.string().required(),
  productCount: Joi.number().integer().default(0),
  subcategoryCount: Joi.number().integer().default(0),
  description: Joi.string().optional(),
  webMedia: mediaTypeModelSchema.required(),
  mobileMedia: mediaTypeModelSchema.required(),
  posMedia: mediaTypeModelSchema.required(),
  toolTip: Joi.string().required(),
  orderValue: Joi.number().default(0),
  productAllowed: Joi.boolean().default(true),
  seo: seoModelSchema.required(),
  activeFlag: Joi.boolean().default(true),
  deleteFlag: Joi.boolean().default(false),
  createdBy: Joi.string().required(),
  creationDate: Joi.date().default(() => new Date()),
  modifiedBy: Joi.string().required(),
  modifiedDate: Joi.date().default(() => new Date())
});
