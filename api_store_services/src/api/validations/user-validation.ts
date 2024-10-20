import Joi from 'joi';

export const userSchema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    phonenumber:Joi.string().regex(/^[0-9]{10}$/).messages({'string.pattern.base': `Phone number must have 10 digits.`}).required(),
    activeFlag: Joi.boolean().required(),
    deleteFlag: Joi.boolean().required(),
    createdBy: Joi.string().default(false),
    creationDate: Joi.date().default(() => new Date(),),
    modifiedBy: Joi.string().required(),
    modifiedDate: Joi.date().default(() => new Date(),)
});
