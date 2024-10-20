import { CategoryModel } from "../../domain/models/categoryModel";

export interface ICategoryService {
  createCategory(category: CategoryModel): Promise<CategoryModel>;
  getCategoryById(_id: string,filterType: string | undefined ): Promise<CategoryModel>;
}
