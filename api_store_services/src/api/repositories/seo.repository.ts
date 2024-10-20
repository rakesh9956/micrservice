import { inject, injectable } from 'inversify';
import mongoose from 'mongoose';
import { ContainerTypes } from '../bindings/container-types';
import { ISeoEntity } from '../infrastructure/entities/iSeoEntity';
import { IRepositoryBase } from './contracts/i-repository-base';
import { ISeoRepository } from './contracts/i-seo.repository';


@injectable()
class SeoRepository implements ISeoRepository {
  @inject(ContainerTypes.SeoRepositoryBase)
  private repositoryBase!: IRepositoryBase<ISeoEntity>;

  async createSeo(seo: ISeoEntity): Promise<ISeoEntity> {
    return this.repositoryBase.create(seo);
  }

  async getSeo(query: any): Promise<ISeoEntity> {
    return this.repositoryBase.findOne(query, '');
  }
  async getAllSeos(query: any): Promise<ISeoEntity[]> {
    return this.repositoryBase.find(query);
  }
  async updateSeo(id: string, seo: ISeoEntity): Promise<ISeoEntity> {
    return (await this.repositoryBase.update(
      new mongoose.Types.ObjectId(id),
      seo
    )) as ISeoEntity;
  }
  async deleteSeo(id: string): Promise<void> {
    return this.repositoryBase.delete(id);
  }
  async filterSeo(
    query: Object,
    fields: string,
    populate: string
  ): Promise<ISeoEntity[]> {
    return this.repositoryBase.filter(query, fields, populate);
  }
}
export default SeoRepository;
