import { injectable } from "inversify";
import { RepositoryBase } from "../repository-base";
import City, { IcityEntity } from "../../infrastructure/cityEntity";


@injectable()
export class cityRepositoryBase extends RepositoryBase<IcityEntity> {
  constructor() {
    super(City);
  }
}
