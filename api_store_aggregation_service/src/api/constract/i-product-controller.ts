import { Request, Response } from "express";
export interface IProductController {
    createProduct(request: Request, response: Response): Promise<any>;
}