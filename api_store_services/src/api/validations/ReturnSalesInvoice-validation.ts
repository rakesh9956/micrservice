import Joi from "joi";

export const returnSalesInvoiceSchema = Joi.object({
    invoiceId: Joi.string().required(),
    storeId: Joi.string(),
    iretailSync: Joi.boolean().default(false),
    returnOrderId: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).message('Invalid ReturnOrder ID'),
    invoiceStatus: Joi.string().valid('Generated', 'Pending', 'Completed').default('Generated'),
    activeFlag : Joi.boolean().default(true),
    deleteFlag: Joi.boolean().default(false),
    createdBy: Joi.string().required(),
    creationDate: Joi.date().default(Date.now),
    modifiedBy: Joi.string(),
    modifiedDate: Joi.date(),
  });