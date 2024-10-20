import { CityModel } from "../../domain/models/city.model";
export interface ICityservices {
    createCity(city: CityModel): Promise<CityModel>;
    getCities(filterType: string): Promise<CityModel[]>;
}