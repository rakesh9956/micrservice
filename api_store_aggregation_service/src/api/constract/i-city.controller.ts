import { Request, Response } from "express";
export interface ICityController{
    createCity(request: Request, response: Response): Promise<any>;
}