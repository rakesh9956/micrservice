import { productModel } from "../../../domain/product.model";

export interface IProductService {
    createProduct(product: productModel): Promise<productModel>;
}