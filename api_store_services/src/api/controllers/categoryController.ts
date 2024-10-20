import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { ContainerTypes } from "../bindings/container-types";
import { ICategoryController } from "../contracts/icategory-controller";
import { ICategoryService } from "../applications/contracts/i-category-services";
import { CategoryModel } from "../domain/models/categoryModel";
import { successResponse } from "../domain/models/response.model";

@injectable()
export class CategoryController implements ICategoryController {
  @inject(ContainerTypes.CategoryService)
  private catagoryService!: ICategoryService;

  public async createCategory(
    request: Request,
    response: Response
  ): Promise<void> {
    let categoryModel: CategoryModel = request.body;
    const catagoryResponse = await this.catagoryService.createCategory(
      categoryModel
    );
    response.json(successResponse(catagoryResponse));
  }
  async getCategoryById(request: Request, response: Response): Promise<void> {
    const id: string = request.params.id;
    const categoryResponse = await this.catagoryService.getCategoryById(
      id,
      request.query?.filterType as any
    );
    if (!categoryResponse)
      throw appError(ErrorConstants.ITEM_NOT_FOUND, ErrorConstants.NOT_FOUND);
    response.json(successResponse(categoryResponse));
  }
}

export default CategoryController;
