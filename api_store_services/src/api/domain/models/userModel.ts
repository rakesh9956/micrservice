import { Exclude, Expose, Type } from "class-transformer";


export class userModel {
  @Expose()
  identifier?: string;
  @Expose()
  name?: string;
  @Expose()
  description?: string;
  @Expose()
  default?: boolean;
  @Expose()
  activeFlag!: boolean;
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
