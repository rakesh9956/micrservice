import { injectable } from "inversify";
import { SERVICE_URL } from "../config/config";
import { ICityAdapter } from "../constarct/i-city-adapter";
import { CityModel } from "../domain/city.model";
import AdapterBase from "./adapter-base";
@injectable()
class CityAdapter extends AdapterBase implements ICityAdapter {
  async createCity(city: CityModel): Promise<CityModel> {
    try {
      const url = `${SERVICE_URL.ADMIN_SERVICE_URL}/CityController/create`;
      return this.postRequest(url, city);
    } catch (error) {
      throw error;
    }
  }
}
export default CityAdapter;
