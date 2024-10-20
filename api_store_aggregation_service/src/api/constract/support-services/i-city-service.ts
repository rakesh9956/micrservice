import { CityModel } from "../../../domain/city.model";

export interface ICityService {
    createCity(country: CityModel): Promise<CityModel>;
}