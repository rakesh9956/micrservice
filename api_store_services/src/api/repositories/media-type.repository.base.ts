import { injectable } from 'inversify';
import { RepositoryBase } from './repository-base';
import MediaType, { IMediaTypeEntity } from '../infrastructure/entities/iMediaTypeEntity';


@injectable()
export class MediaTypeRepositoryBase extends RepositoryBase<IMediaTypeEntity> {
  constructor() {
    super(MediaType);
  }
}
