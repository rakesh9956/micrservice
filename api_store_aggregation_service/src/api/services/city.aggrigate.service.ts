
import { inject, injectable } from "inversify";
import { CityModel } from "../../domain/city.model";
import { ICityAggregateService } from "../constract/support-services/i-city-aggrigate.service";
import { ICityService } from "../constract/support-services/i-city-service";
import { plainToInstance } from "class-transformer";
import { ContainerTypes } from "../bindings/container-types";
@injectable()
export class CityAggregateService implements ICityAggregateService{
  @inject(ContainerTypes.CityService)
  private cityService!: ICityService;
  
  async createCity(city: CityModel): Promise<CityModel> {
    try {
      return plainToInstance(
        CityModel,
        await this.cityService.createCity(city)
      );
    } catch (error) {
      throw error;
    }
  }
}
export default CityAggregateService