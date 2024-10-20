import { Exclude, Expose, Type } from "class-transformer";


@Exclude()
export class CityModel  {
  @Expose()
  city!: string;

  @Expose()
  cityCode!: string;

  @Expose()
  stateId!: string;

  @Expose()
  countryName!: string;

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

  @Expose()
  @Type(() => Date)
  modifiedDate!: Date;
}