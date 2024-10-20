import Joi from 'joi';
import { customErrorMessages } from '../constants/joi-validate-messages';

export const userSchemas = {
    firstname: Joi.string().required().error(errors => customErrorMessages(errors,'firstname')),
    lastname: Joi.string().required().error(errors => customErrorMessages(errors,'lastname')),
    phonenumber:Joi.string().regex(/^[0-9]{10}$/).messages({'string.pattern.base': `Phone number must have 10 digits.`}).required(),
    activeFlag: Joi.boolean().required().error(errors => customErrorMessages(errors,'activeFlag')),
    deleteFlag: Joi.boolean().required().error(errors => customErrorMessages(errors,'deleteFlag')),
    createdBy: Joi.string().default(false).error(errors => customErrorMessages(errors,'createdBy')),
    creationDate: Joi.date().default(() => new Date(),),
    modifiedBy: Joi.string().required().error(errors => customErrorMessages(errors,'modifiedBy')),
    modifiedDate: Joi.date().default(() => new Date(),).error(errors => customErrorMessages(errors,'modifiedDate'))
};
export const  userSchema= Joi.object().keys(userSchemas)
