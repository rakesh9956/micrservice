import { Expose } from 'class-transformer';
import { BaseModel } from './baseModel';

export class SeoModel extends BaseModel {
  @Expose()
  title!: string | undefined;
  @Expose()
  keywords!: string[] | undefined;
  @Expose()
  description!: string | undefined;
  @Expose()
  url!: string | undefined;
}
