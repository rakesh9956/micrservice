import { Exclude, Expose, Type } from "class-transformer";
import "reflect-metadata";

import { BaseModel } from "./baseModel";
import { MediaTypeModel } from "./mediaTypeModel";
import { SeoModel } from "./seoModel";
import { ExposeId } from "../../applications/utils/customtransform";

@Exclude()
export class CategoryModel extends BaseModel {
  @Expose()
  @ExposeId()
  businessUnitId!: string;
  @Expose()
  categoryName!: string;
  @Expose()
  productCount!: number;
  @Expose()
  subcategoryCount!: number;
  @Expose()
  description!: string;
  @Expose()
  @ExposeId()
  @Type(() => MediaTypeModel)
  webMedia!: MediaTypeModel;

  @Expose()
  @ExposeId()
  @Type(() => MediaTypeModel)
  mobileMedia!: MediaTypeModel;

  @Expose()
  @ExposeId()
  @Type(() => MediaTypeModel)
  posMedia!: MediaTypeModel;
  
  @Expose()
  toolTip!: string;
  @Expose()
  orderValue!: number;
  @Expose()
  productAllowed!: boolean;
  @Type(() => SeoModel)
  @Expose()
  @ExposeId()
  @Type(() => SeoModel)
  seo!: SeoModel;
  @Expose()
  activeFlag!: boolean;
  @Expose()
  deleteFlag!: boolean;
  @Expose()
  createdBy!: string;
  @Expose()
  creationDate!: Date;
  @Expose()
  modifiedBy!: string;
  @Expose()
  modifiedDate!: Date;
}
