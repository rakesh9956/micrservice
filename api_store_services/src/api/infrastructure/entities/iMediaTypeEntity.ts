import { Document, Schema, model } from 'mongoose';

import { IEntityBase } from './contracts/iEntityBase';
import { EntityConstants } from '../../constants/entity-constants';



export interface IMediaTypeEntity extends IEntityBase, Document {
  media: string;
  thumbnail: string;
  type: string;
}

export const MediaTypeEntitySchema = new Schema<IMediaTypeEntity>({
  media: String,
  thumbnail: String,
  type: String,
});

const MediaType = model<IMediaTypeEntity>(
  EntityConstants.MEDIA_TYPE_MODEL_NAME, // Model name
  MediaTypeEntitySchema, // Schema
  EntityConstants.MEDIA_TYPE_COLLECTION_NAME //collection name
);

export default MediaType;
