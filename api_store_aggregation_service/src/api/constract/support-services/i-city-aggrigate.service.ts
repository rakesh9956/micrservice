import { CityModel } from "../../../domain/city.model";

export interface ICityAggregateService{
    createCity(country: CityModel): Promise<CityModel>;
}