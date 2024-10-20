import "reflect-metadata";
import { injectable, inject } from "inversify";
import { ICategoryAggregateService } from "../constract/support-services/i-category-aggregate.service";
import { CategoryModel } from "../../domain/category.model";
import { ContainerTypes } from "../bindings/container-types";
import { ICategoryService } from "../constract/support-services/i-category.service";


@injectable()
class CategoryAggregateService implements ICategoryAggregateService {
  @inject(ContainerTypes.CategoryService)
  private categoryService!: ICategoryService;

  async createCategory(category: CategoryModel): Promise<CategoryModel> {
    return await this.categoryService.createCategory(category);
  }
}

export default CategoryAggregateService;
