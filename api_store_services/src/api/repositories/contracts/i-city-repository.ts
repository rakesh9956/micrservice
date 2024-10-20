import { IcityEntity } from "../../infrastructure/cityEntity";

export interface IcityRepository{
    createCity (city:IcityEntity):Promise<IcityEntity>;
    getCities(filterType?: string): Promise<IcityEntity[]>;

}