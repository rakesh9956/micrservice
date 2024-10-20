import { injectable } from "inversify";
import { SERVICE_URL } from "../config/config";
import { ICityAdapter } from "../constarct/i-city-adapter";
import { CityModel } from "../domain/city.model";
import AdapterBase from "./adapter-base";
import { IProductAdapter } from "../constarct/i-product-adapter";
import { productModel } from "../domain/product.model";
@injectable()
class ProductAdapter extends AdapterBase implements IProductAdapter {
  async createProduct(product: productModel): Promise<any> {
    try {
      const url = `${SERVICE_URL.ADMIN_SERVICE_URL}/product-details`;
      return await this.jsonAxios({
        url: url,
        method: "post",
        data: product,
      });
    } catch (error: any) {
      throw error;
    }
  }
}
export default ProductAdapter;
