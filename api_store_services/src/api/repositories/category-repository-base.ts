
import { injectable } from 'inversify';
import Category, { ICategoryEntity } from '../infrastructure/entities/categoryEntity';
import { RepositoryBase } from './repository-base';


@injectable()
export class CategoryRepositoryBase extends RepositoryBase<ICategoryEntity> {
  constructor() {
    super(Category);
  }
}
