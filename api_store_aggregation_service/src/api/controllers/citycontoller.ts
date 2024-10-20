import { inject, injectable } from "inversify";
import { CityModel } from "../../domain/city.model";
import { ICityController } from "../constract/i-city.controller";
import { Request,Response } from "express"; 
import { ICityAggregateService } from "../constract/support-services/i-city-aggrigate.service";
import { ContainerTypes } from "../bindings/container-types"
import { successResponse } from "../models/respose.model";
@injectable()
export class citycontroller implements ICityController{
    @inject(ContainerTypes.CityAggregateService)
    private CityAggregateService!: ICityAggregateService;
    async createCity(request:Request,response:Response): Promise<any> {
        try{
            let cityModel: CityModel = request.body;
            const result = await this.CityAggregateService.createCity(cityModel);
            response.json(successResponse(result));
        }
        catch(err){
          return response.json((err)) 
        }
    }
}