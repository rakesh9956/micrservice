import { CityModel } from "../domain/city.model";

export interface ICityAdapter{
    createCity(city: CityModel): Promise<CityModel>;
}