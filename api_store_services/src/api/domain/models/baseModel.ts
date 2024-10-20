import { Expose } from 'class-transformer';
import { ExposeId } from "../../applications/utils/customtransform";


export class BaseModel {
  @Expose()
  @ExposeId()
  id?: string | undefined;
  @Expose()
  @ExposeId()
  _id?: string | undefined;
}
