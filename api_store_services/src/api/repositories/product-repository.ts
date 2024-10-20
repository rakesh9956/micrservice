import { inject, injectable } from "inversify";
import { ContainerTypes } from "../bindings/container-types";
import { IRepositoryBase } from "./contracts/i-repository-base";
import { IproductRepository } from "./contracts/i-product-repository";
import { IproductEntity } from "../infrastructure/entities/productEntity";
@injectable()
class ProdcutRepository implements IproductRepository {
  @inject
  (ContainerTypes.productRepositoryBase)
  private addressRepositoryBase!: IRepositoryBase<IproductEntity>;
  async createProduct(product: IproductEntity): Promise<IproductEntity> {
    return this.addressRepositoryBase.create(product);
  }
}
export default ProdcutRepository;
