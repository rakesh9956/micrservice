import { Document, Schema, Types, model } from "mongoose";


import { IMediaTypeEntity } from "./iMediaTypeEntity";
import { IEntityBase } from "./contracts/iEntityBase";
import { EntityConstants } from "../../constants/entity-constants";

export interface ICategoryEntity extends IEntityBase, Document {
  businessUnitId: string;
  categoryName: string;
  description: string;
  webMedia?: IMediaTypeEntity;
  mobileMedia?: IMediaTypeEntity;
  posMedia?: string;
  orderValue: number;
  toolTip: string;
  productAllowed: boolean;
  seo: string[];
}

export const CategoryEntitySchema = new Schema({
  businessUnitId: Types.ObjectId,
  categoryName: String,
  description: String,
  webMedia: {
    type: Types.ObjectId,
    ref: EntityConstants.MEDIA_TYPE_MODEL_NAME,
  },
  mobileMedia: {
    type: Types.ObjectId,
    ref: EntityConstants.MEDIA_TYPE_MODEL_NAME,
  },
  posMedia: {
    type: Types.ObjectId,
    ref: EntityConstants.MEDIA_TYPE_MODEL_NAME,
  },
  orderValue: Number,
  toolTip: String,
  productAllowed: Boolean,
  seo: { type: Types.ObjectId, ref: EntityConstants.SEO_MODEL_NAME },
  activeFlag: { type: Boolean, default: true },
  deleteFlag: { type: Boolean, default: false },
  createdBy: String,
  creationDate: { type: Date, default: new Date() },
  modifiedBy: String,
  modifiedDate: { type: Date, default: new Date() },
});

CategoryEntitySchema.index(
  { categoryName: 1, businessUnitId: 1 },
  { unique: true }
);

const Category = model<ICategoryEntity>(
  EntityConstants.CATAGORY_MODEL_NAME, 
  CategoryEntitySchema,
  EntityConstants.CATAGORY_COLLECTION_NAME 
);

export default Category;
