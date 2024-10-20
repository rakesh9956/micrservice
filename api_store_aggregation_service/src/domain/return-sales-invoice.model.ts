import { Exclude, Expose, Transform } from "class-transformer";
import "reflect-metadata";
import { customTransform } from "../api/utils/custom-transform";


@Exclude()
export class ReturnSalesInvoiceModel {
  @Expose()
  @Transform(customTransform)
  _id: string | undefined;
  @Expose()
  invoiceId!: string;
  @Expose()
  @Transform(customTransform)
  returnOrderId!: string;
  @Expose()
  iretailSync!: boolean;
  @Expose()
  activeFlag: Boolean | undefined;
  @Expose()
  deleteFlag: Boolean | undefined;
  @Expose()
  createdBy: string | undefined;
  @Expose()
  creationDate: Date | undefined;
  @Expose()
  modifiedBy: string | undefined;
  @Expose()
  modifiedDate: Date | undefined;
}
