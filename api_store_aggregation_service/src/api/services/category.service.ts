import "reflect-metadata";
import { instanceToPlain, plainToInstance } from "class-transformer";
import { injectable, inject } from "inversify";
import { ICategoryAdapter } from "../../constarct/i-category.adapter";
import { CategoryModel } from "../../domain/category.model";
import { ContainerTypes } from "../bindings/container-types";
import { ICategoryService } from "../constract/support-services/i-category.service";


@injectable()
class CategoryService implements ICategoryService {
  @inject(ContainerTypes.CategoryAdapter)
  private categoryAdapter!: ICategoryAdapter;

  async createCategory(category: CategoryModel): Promise<CategoryModel> {
    let categoryResponse = await this.categoryAdapter.createCategory(category);
    return instanceToPlain(categoryResponse) as CategoryModel;
  }
}

export default CategoryService;
