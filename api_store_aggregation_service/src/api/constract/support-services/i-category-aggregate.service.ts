import { CategoryModel } from "../../../domain/category.model";


export interface ICategoryAggregateService {
  createCategory(category: CategoryModel): Promise<CategoryModel>;
}
