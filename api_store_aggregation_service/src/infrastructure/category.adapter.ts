import { inject, injectable } from "inversify";
import { SERVICE_URL } from "../config/config";
import { ICategoryAdapter } from "../constarct/i-category.adapter";
import { CategoryModel } from "../domain/category.model";
import AdapterBase from "./adapter-base";
import jsonAxios from 'axios';


@injectable()
class CategoryAdapter extends AdapterBase implements ICategoryAdapter {
  createCategory(category: CategoryModel): Promise<CategoryModel> {
    try {
      const url = `${SERVICE_URL.ADMIN_SERVICE_URL}/categories/create`;
      return this.postRequest(url, category);
    } catch (error: unknown) {
      throw error instanceof Error ? Object.assign(error) : error;
    }
  }
}
export default CategoryAdapter;
