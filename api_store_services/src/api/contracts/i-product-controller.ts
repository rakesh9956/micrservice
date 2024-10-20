import { Request, Response } from "express";

export interface IproductController {
    createProduct(request: Request, response: Response): Promise<any>;
}