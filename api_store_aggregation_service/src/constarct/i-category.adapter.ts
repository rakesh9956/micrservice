import { CategoryModel } from "../domain/category.model";

export interface ICategoryAdapter {
  createCategory(category: CategoryModel): Promise<CategoryModel>;
}
