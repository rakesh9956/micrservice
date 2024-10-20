import { CityModel } from "../domain/city.model";
import { productModel } from "../domain/product.model";

export interface IProductAdapter {
    createProduct(product: productModel): Promise<productModel>;
}