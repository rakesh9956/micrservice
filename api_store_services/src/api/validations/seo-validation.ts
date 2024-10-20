import Joi from 'joi';

export const seoModelSchema = Joi.object({
  title: Joi.string().optional(),
  keywords: Joi.array().items(Joi.string()).optional(),
  description: Joi.string().optional(),
  url: Joi.string().uri().optional()
});
