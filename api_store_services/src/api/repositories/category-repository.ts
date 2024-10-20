import { inject, injectable } from "inversify";
import { ICategoryRepository } from "./contracts/i-category-repository";
import { ContainerTypes } from "../../api/bindings/container-types";

import { ICategoryEntity } from "../infrastructure/entities/categoryEntity";
import { IRepositoryBase } from "./contracts/i-repository-base";
import { FilterConstants } from "../constants/filter.constants";


@injectable()
class CategoryRepository implements ICategoryRepository {
  @inject(ContainerTypes.CategoryRepositoryBase)
  private repositoryBase!: IRepositoryBase<ICategoryEntity>;

  async createCategory(category: ICategoryEntity): Promise<ICategoryEntity> {
    return this.repositoryBase.create(category);
  }
  async getCategory(
    _id: any,
    filterType: string | undefined
  ): Promise<ICategoryEntity> {
    let populate =
      filterType === FilterConstants.METADATA
        ? ""
        : FilterConstants.POPULATE_CATEGORY_DATA;
    return this.repositoryBase.findOne({ _id: _id }, populate);
  }
}
export default CategoryRepository;
