import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { ICategoryController } from "../constract/i-category.controller";
import { CategoryModel } from "../../domain/category.model";
import { ContainerTypes } from "../bindings/container-types";
import { ICategoryAggregateService } from "../constract/support-services/i-category-aggregate.service";


@injectable()
export class CategoryController implements ICategoryController {
  @inject(ContainerTypes.CategoryAggregateService)
  private categoryAggregateService!: ICategoryAggregateService;

  public async createCategory(
    request: Request,
    response: Response
  ): Promise<void> {
    let categoryModel: CategoryModel = request.body;
    const result = await this.categoryAggregateService.createCategory(
      categoryModel
    );
    response.json(result);
  }
}

export default CategoryController;
