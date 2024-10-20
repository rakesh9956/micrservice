import { injectable } from 'inversify';
import { RepositoryBase } from './repository-base';
import Seo, { ISeoEntity } from '../infrastructure/entities/iSeoEntity';


@injectable()
export class SeoRepositoryBase extends RepositoryBase<ISeoEntity> {
  constructor() {
    super(Seo);
  }
}
