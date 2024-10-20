import { inject, injectable } from "inversify";
import mongoose from "mongoose";
import { ContainerTypes } from "../bindings/container-types";
import { IMediaTypeEntity } from "../infrastructure/entities/iMediaTypeEntity";
import { IMediaTypeRepository } from "./contracts/i-media-type.repository";
import { IRepositoryBase } from "./contracts/i-repository-base";

@injectable()
class MediaTypeRepository implements IMediaTypeRepository {
  @inject(ContainerTypes.MediaTypeRepositoryBase)
  private repositoryBase!: IRepositoryBase<IMediaTypeEntity>;

  async createMediaType(
    mediaType: IMediaTypeEntity
  ): Promise<IMediaTypeEntity> {
    return this.repositoryBase.create(mediaType);
  }

  async getMediaType(query: any): Promise<IMediaTypeEntity> {
    return this.repositoryBase.findOne(query, "");
  }
  async getAllMediaTypes(query: any): Promise<IMediaTypeEntity[]> {
    return this.repositoryBase.find(query);
  }
  async updateMediaType(
    id: string,
    mediaType: IMediaTypeEntity
  ): Promise<IMediaTypeEntity> {
    return (await this.repositoryBase.update(
      new mongoose.Types.ObjectId(id),
      mediaType
    )) as IMediaTypeEntity;
  }
  async deleteMediaType(id: string): Promise<void> {
    return this.repositoryBase.delete(id);
  }
  async filterMediaType(
    query: Object,
    fields: string,
    populate: string
  ): Promise<IMediaTypeEntity[]> {
    return this.repositoryBase.filter(query, fields, populate);
  }

  async bulkCreate(media: IMediaTypeEntity[]) {
    return this.repositoryBase.bulkInsert(media);
  }
}
export default MediaTypeRepository;
