
import { inject, injectable } from 'inversify';
import { ContainerTypes } from '../bindings/container-types';
import { IcityController } from '../contracts/icity-controller';
import { Request, Response } from 'express';
import { ICityservices } from '../applications/contracts/i-city-services';
import { CityModel } from '../domain/models/city.model';
import { successResponse } from '../domain/models/response.model';
@injectable()
class CityController implements IcityController {
  @inject(ContainerTypes.CityService)
  private cityService!: ICityservices;
public async Createcity(req: Request, response: Response): Promise<void> {
   try{
        let city:CityModel=req.body;
        const result = await this.cityService.createCity(city);
        response.json(successResponse(result));
   }
   catch (err){
        throw err
   }
 }
 async getCities(request: Request, response: Response): Promise<void> {
     try {
          const filterType = request.query.filterType as string;
          const result = await this.cityService.getCities(filterType);
       response.json((result));
     } catch (err){
          throw err
     }
   }
}
export default CityController;