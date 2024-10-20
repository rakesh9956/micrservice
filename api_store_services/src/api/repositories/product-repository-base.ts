import { injectable } from "inversify";
import { RepositoryBase } from "./repository-base";
import Product, { IproductEntity } from "../infrastructure/entities/productEntity";

@injectable()
export class ProductRepositoryBase extends RepositoryBase<IproductEntity> {
  constructor() {
    super(Product);
  }
}
