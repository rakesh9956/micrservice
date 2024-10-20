import { ICategoryEntity } from "../../infrastructure/entities/categoryEntity";

export interface ICategoryRepository {
  createCategory(categoryEntity: ICategoryEntity): Promise<ICategoryEntity>;
  getCategory(
    id: string,
    filterType?: string | undefined
  ): Promise<ICategoryEntity>;
}
