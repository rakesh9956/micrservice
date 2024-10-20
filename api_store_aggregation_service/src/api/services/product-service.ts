import { inject, injectable } from "inversify";
import { ICityAdapter } from "../../constarct/i-city-adapter";
import { CityModel } from "../../domain/city.model";
import { ICityService } from "../constract/support-services/i-city-service";
import { ContainerTypes } from "../bindings/container-types";
import { IProductAdapter } from "../../constarct/i-product-adapter";
import { productModel } from "../../domain/product.model";
import { IProductService } from "../constract/support-services/i-product-service";
@injectable()
class productService implements IProductService {
    @inject(ContainerTypes.ProductAdapter)
    private productAdapter!: IProductAdapter;
    
    async createProduct(product: any): Promise<any> {
      try {
          return await this.productAdapter.createProduct(product);
      } catch (error) {
          throw error; // Optionally re-throw the error if you want to propagate it further
      }
  }
  
}
export default productService