import { productModel } from "../../../domain/product.model";

export interface IProductAggregateService{
    createProduct(product: productModel): Promise<productModel>;
}