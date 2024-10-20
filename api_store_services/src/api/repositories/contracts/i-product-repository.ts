import { IproductEntity } from "../../infrastructure/entities/productEntity";

export interface IproductRepository {
    createProduct(product:IproductEntity):Promise<IproductEntity>;
}