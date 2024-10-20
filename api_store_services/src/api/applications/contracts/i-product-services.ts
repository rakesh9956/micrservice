import { productModel } from "../../domain/models/productModel";
export interface IProductService {
    createProduct(deliveryInstruction: productModel): Promise<productModel>; 
 }