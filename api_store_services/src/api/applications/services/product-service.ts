import { inject, injectable } from "inversify";
import { userModel } from "../../domain/models/userModel";
import { IuserEntity } from "../../infrastructure/entities/userEntity";
import { instanceToPlain, plainToInstance } from "class-transformer";
import { ContainerTypes } from "../../bindings/container-types";
import { IProductService } from "../contracts/i-product-services";
import { IproductRepository } from "../../repositories/contracts/i-product-repository";
import { productModel } from "../../domain/models/productModel";
import { IproductEntity } from "../../infrastructure/entities/productEntity";
@injectable()
class productService implements IProductService  {
    @inject(ContainerTypes.productRepository)
    private UserRepository!:IproductRepository
   async createProduct(addon: productModel): Promise<any> {    
    let result: any;
    let addonEntity = instanceToPlain(addon) as IproductEntity;
    return await this.UserRepository.createProduct(addonEntity);
  }
}
export default productService;
