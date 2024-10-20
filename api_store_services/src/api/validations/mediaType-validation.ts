import Joi from 'joi';

export const mediaTypeModelSchema = Joi.object({
  media: Joi.string().optional(),
  thumbnail: Joi.string().optional(),
  type: Joi.string().optional()
});
