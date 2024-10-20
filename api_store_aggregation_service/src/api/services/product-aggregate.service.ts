
import { inject, injectable } from "inversify";
import { CityModel } from "../../domain/city.model";
import { ICityAggregateService } from "../constract/support-services/i-city-aggrigate.service";
import { ICityService } from "../constract/support-services/i-city-service";
import { plainToInstance } from "class-transformer";
import { IProductAggregateService } from "../constract/support-services/i-product-aggregate.service";
import { productModel } from "../../domain/product.model";
import { IProductService } from "../constract/support-services/i-product-service";
import { ContainerTypes } from "../bindings/container-types";
@injectable()
export class ProductAggregateService implements IProductAggregateService {
  @inject(ContainerTypes.ProductService)
  private productService!: IProductService;
  
  async createProduct(product: any):Promise<any> {
    try {
      return await this.productService.createProduct(product);
    } catch (error) {
      throw error; // Re-throwing the error for the caller to handle
    }
  }
  
}
export default ProductAggregateService