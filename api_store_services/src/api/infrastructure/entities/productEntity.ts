import { Schema, Types, model } from "mongoose";
import { DbConstants } from "../../constants/dbconstants";

    export interface IproductEntity extends Document{
        grocery: string;
        mobiles: string;
        fashion: string;
        electronics:string;
        deleteFlag: boolean;
        createdBy: string;
        creationDate: Date;
        modifiedBy: string;
        modifiedDate: Date;
    }
    const productEntitySchema = new Schema<IproductEntity>({
        grocery: String,
        mobiles: String,
        fashion: String,
        electronics:String,
        deleteFlag: { type: Boolean, default: false },
        createdBy: String,
        creationDate: { type: Date, default: new Date() },
        modifiedBy: String,
        modifiedDate: { type: Date, default: new Date() },
      });

  const Product = model<IproductEntity>(
    DbConstants.Product, // Model name
    productEntitySchema, // Schema
    DbConstants.Product // Custom collection name
  );
  export default Product;
