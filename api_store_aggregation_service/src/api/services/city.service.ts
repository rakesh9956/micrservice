import { inject, injectable } from "inversify";
import { ICityAdapter } from "../../constarct/i-city-adapter";
import { CityModel } from "../../domain/city.model";
import { ICityService } from "../constract/support-services/i-city-service";
import { ContainerTypes } from "../bindings/container-types";
@injectable()
class cityService implements ICityService{
    @inject(ContainerTypes.CityAdapter)
    private cityAdapter!: ICityAdapter;
    
    async createCity(city: CityModel): Promise<CityModel> {
      try{
        return await this.cityAdapter.createCity(city);
      }
      catch(error){
        throw error
      }
      }
}
export default cityService