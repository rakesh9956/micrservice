import { Response,Request } from "express";

export interface IcityController{
    Createcity(request: Request, response: Response):Promise<any>;
    getCities(request: Request, response: Response): Promise<void>;
}