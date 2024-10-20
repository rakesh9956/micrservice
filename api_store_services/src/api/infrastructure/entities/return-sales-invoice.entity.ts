import { Types, Schema, model } from "mongoose";
import { IEntityBase } from "../../repositories/contracts/ientitybase";


export interface IReturnSalesInvoiceEntity extends IEntityBase {
  _id: string;
  invoiceId: string | undefined;
  storeId: string | undefined;
  returnOrderId: string | undefined;
  invoiceStatus: string | undefined;
  iretailSync: boolean | undefined;
}

export const ReturnSalesInvoiceEntitySchema =
  new Schema<IReturnSalesInvoiceEntity>({
    invoiceId: String,
    storeId: String,
    iretailSync: {
      type: Boolean,
      default: false,
    },
    returnOrderId: {
      type: Types.ObjectId,
      ref: "ReturnOrder",
    },
    invoiceStatus: {
      type: String,
      default: "Generated",
    },
    deleteFlag: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: String,
    },
    creationDate: {
      type: Date,
    },
    modifiedBy: {
      type: String,
    },
    modifiedDate: {
      type: Date,
    },
  });

const ReturnSalesInvoice = model<IReturnSalesInvoiceEntity>(
  "ReturnSalesInvoice", // Model name
  ReturnSalesInvoiceEntitySchema, // Schema
  "ReturnSalesInvoice"
);

export default ReturnSalesInvoice;
