import { Types, Schema, model, Document } from "mongoose";
import { DbConstants } from "../../constants/dbconstants";

export interface IuserEntity extends Document {
  identifier?: string;
  name?: string;
  description?: string;
  default?: boolean;
}

const AddonEntitySchema = new Schema<IuserEntity>({
  identifier: String,
  name: String,
  description: String,
  default: Boolean
});

const Addon = model<IuserEntity>(
 DbConstants.Addon, // Model name
  AddonEntitySchema, // Schema
 DbConstants.Addon // Custom collection name
);

export default Addon;
