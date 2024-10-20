import { Exclude, Expose, Type } from "class-transformer";

export class productModel {
  @Expose()
  grocery?: string;
  @Expose()
  mobiles?: string;
  @Expose()
  fashion?: string;
  @Expose()
  electronics?: string;
  @Expose()
  deleteFlag!: boolean;
  @Expose()
  createdBy!: string;
  @Expose()
  @Type(() => Date)
  creationDate!: Date;
  @Expose()
  modifiedBy!: string;
  @Exclude()
  @Type(() => Date)
  modifiedDate!: Date;
}
