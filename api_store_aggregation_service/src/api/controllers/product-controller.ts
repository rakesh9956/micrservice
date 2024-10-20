import { Request,Response } from "express"; 
import { IProductController } from "../constract/i-product-controller";
import { inject, injectable } from "inversify";
import { IProductAggregateService } from "../constract/support-services/i-product-aggregate.service";
import { productModel } from "../../domain/product.model";
import { ContainerTypes } from "../bindings/container-types";
import { successResponse } from "../models/respose.model";
@injectable()
export class Productcontroller implements IProductController {
    @inject(ContainerTypes.ProductAggregateService)
    private productAggregateService!: IProductAggregateService;
    async createProduct(request: Request, response: Response): Promise<any> {
        try {
            let product: productModel = request.body;
            const productResponse = await this.productAggregateService.createProduct(product);
            response.json(successResponse(productResponse));
        } catch (error) {
           return response.json(error);
        }
    }
    
}