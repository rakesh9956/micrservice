import { inject, injectable } from "inversify";
import { Request, Response, } from "express";
import { ContainerTypes } from "../bindings/container-types";
import "reflect-metadata";
import { IproductController } from "../contracts/i-product-controller";
import { productModel } from "../domain/models/productModel";
import { IProductService } from "../applications/contracts/i-product-services";
import { successResponse } from "../domain/models/response.model";
@injectable()
class productController implements IproductController {
  @inject(ContainerTypes.productService)
  private productService!: IProductService;

  async createProduct(request: Request, response: Response): Promise<any> {  
    try {
      let addon: productModel = request.body;
      const result = await this.productService.createProduct(addon);
      response.json(successResponse(result));
    } catch (e: any) {
      let error = {
        message: e?.message,
        e: e,
      };
      return response.json(error);
    }
  }
}

export default productController;
