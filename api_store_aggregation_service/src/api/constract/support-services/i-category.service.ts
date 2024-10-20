import { CategoryModel } from "../../../domain/category.model";


export interface ICategoryService {
  createCategory(category: CategoryModel): Promise<CategoryModel>;
}
