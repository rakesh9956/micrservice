import { Exclude, Expose, Transform, Type } from "class-transformer";
import "reflect-metadata";

import { BaseModel } from "./base.model";
import { MediaTypeModel } from "./media-type.model";
import { SeoModel } from "./seo.model";
import { ExposeId } from "../api/utils/custom-transform";

@Exclude()
export class CategoryModel extends BaseModel {
  @Expose()
  @ExposeId()
  businessUnitId!: string | undefined;
  @Expose()
  categoryName!: string | undefined;
  @Expose()
  productCount!: number;
  @Expose()
  subcategoryCount!: number;
  @Expose()
  orderValue!: number;
  @Expose()
  @ExposeId()
  @Type(() => MediaTypeModel)
  images!: MediaTypeModel | undefined;
  @Expose()
  description!: string | undefined;
  @Expose()
  @ExposeId()
  @Type(() => MediaTypeModel)
  webMedia!: MediaTypeModel | undefined;
  @Expose()
  @ExposeId()
  @Type(() => MediaTypeModel)
  mobileMedia!: MediaTypeModel | undefined;
  @Expose()
  @ExposeId()
  @Type(() => MediaTypeModel)
  posMedia!: MediaTypeModel | undefined;
  @Expose()
  toolTip!: string | undefined;
  @Expose()
  productAllowed!: boolean | undefined;
  @Type(() => SeoModel)
  @Expose()
  seo!: SeoModel | undefined;
  @Expose()
  activeFlag!: boolean | undefined;
  @Expose()
  deleteFlag!: boolean | undefined;
  @Expose()
  createdBy!: string | undefined;
  @Expose()
  creationDate!: Date | undefined;
  @Expose()
  modifiedBy!: string | undefined;
  @Expose()
  modifiedDate!: Date | undefined;
}
