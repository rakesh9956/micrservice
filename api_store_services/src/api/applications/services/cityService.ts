import { inject, injectable } from "inversify";
import { CityModel } from "../../domain/models/city.model";
import { ICityservices } from "../contracts/i-city-services";
import { ContainerTypes } from "../../bindings/container-types";
import { IcityRepository } from "../../repositories/contracts/i-city-repository";
import { instanceToPlain, plainToInstance } from "class-transformer";
import { IcityEntity } from "../../infrastructure/cityEntity";

@injectable()
class CityService implements ICityservices{
  @inject(ContainerTypes.cityRepository)
  private cityRepository!: IcityRepository;
    async createCity(city: CityModel): Promise<CityModel> {
        try {
          let cityEntity = instanceToPlain(city) as IcityEntity;
          return (
         await this.cityRepository.createCity(cityEntity)
       );
        } catch (error) {
          throw error;
        }
      }
      async getCities(filterType: string): Promise<CityModel[]> {
        try {
          return plainToInstance(
            CityModel,
            await this.cityRepository.getCities(filterType),
          );
        } catch (error) {
          throw error;
        }
      }
}
export default CityService