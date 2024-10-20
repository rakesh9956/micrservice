import { Schema, Types, model } from "mongoose";
import { DbConstants } from "../constants/dbconstants";

    export interface IcityEntity extends Document{
        city: string;
        cityCode: string;
        stateId: Types.ObjectId;
        activeFlag: boolean;
        deleteFlag: boolean;
        createdBy: string;
        creationDate: Date;
        modifiedBy: string;
        modifiedDate: Date;
    }
    const CityEntitySchema = new Schema<IcityEntity>({
        city: String,
        cityCode: String,
        activeFlag: { type: Boolean, default: true },
        deleteFlag: { type: Boolean, default: false },
        createdBy: String,
        creationDate: { type: Date, default: new Date() },
        modifiedBy: String,
        modifiedDate: { type: Date, default: new Date() },
      });

  const City = model<IcityEntity>(
    DbConstants.City, // Model name
    CityEntitySchema, // Schema
    DbConstants.City // Custom collection name
  );
  export default City;
