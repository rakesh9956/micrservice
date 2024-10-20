import { inject, injectable } from "inversify";
import { ContainerTypes } from "../bindings/container-types";
import { IcityEntity } from "../infrastructure/cityEntity";
import { IcityRepository } from "./contracts/i-city-repository";
import { IRepositoryBase } from "./contracts/i-repository-base";
@injectable()
class cityRepository implements IcityRepository{
  @inject(ContainerTypes.cityRepositorybase)
  private cityRepositoryBase!: IRepositoryBase<IcityEntity>;
   async createCity(cityEntity: IcityEntity): Promise<IcityEntity> {
    return this.cityRepositoryBase.create(cityEntity);
  }
  async getCities(filterType: string): Promise<IcityEntity[]> {
    return this.cityRepositoryBase.find(
      filterType
    );
  }
}
export default cityRepository;