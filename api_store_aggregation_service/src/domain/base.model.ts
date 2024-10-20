import { Expose, Transform } from 'class-transformer';
import { ExposeId } from '../api/utils/custom-transform';


export class BaseModel {
  @Expose()
  @ExposeId()
  id?: string | undefined;
  @Expose()
  @ExposeId()
  _id?: string | undefined;
}
