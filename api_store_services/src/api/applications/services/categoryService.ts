import "reflect-metadata";
import { instanceToPlain, plainToInstance } from "class-transformer";
import { injectable, inject } from "inversify";
import { ContainerTypes } from "../../../api/bindings/container-types";

import { ICategoryRepository } from "../../repositories/contracts/i-category-repository";
import { CategoryModel } from "../../domain/models/categoryModel";
import { ICategoryEntity } from "../../infrastructure/entities/categoryEntity";


import { IMediaTypeRepository } from "../../repositories/contracts/i-media-type.repository";
import { ISeoRepository } from "../../repositories/contracts/i-seo.repository";
import { ISeoEntity } from "../../infrastructure/entities/iSeoEntity";
import { SeoModel } from "../../domain/models/seoModel";
import { MediaTypeModel } from "../../domain/models/mediaTypeModel";
import { IMediaTypeEntity } from "../../infrastructure/entities/iMediaTypeEntity";
import { TransformOptions } from "../../constants/transform-options";
import { ICategoryService } from "../contracts/i-category-services";

@injectable()
class CategoryService implements ICategoryService {
  @inject(ContainerTypes.CategoryRepository)
  private categoryRepository!: ICategoryRepository;
  @inject(ContainerTypes.MediaTypeRepository)
  private mediaTypeRepository!: IMediaTypeRepository;
  @inject(ContainerTypes.SeoRepository)
  private seoRepository!: ISeoRepository;
  private _categoryEntity!: ICategoryEntity;

  async createCategory(category: CategoryModel): Promise<CategoryModel> {
    let seoEntity = await this.createOrUpdateSeo(category?.seo);
    let webMedia = await this.createOrUpdateMediaType(category?.webMedia);
    let posMedia = await this.createOrUpdateMediaType(category?.posMedia);
    let mobileMedia = await this.createOrUpdateMediaType(category?.mobileMedia);

    this._categoryEntity = instanceToPlain(category) as ICategoryEntity;

    this.assignDepdentEntities(seoEntity, webMedia, posMedia, mobileMedia);

    let categoryResponse = await this.categoryRepository.createCategory(
      this._categoryEntity
    );
    return plainToInstance(
      CategoryModel,
      categoryResponse,
      TransformOptions.tranformOptions
    );
  }
  private assignDepdentEntities(
    seoEntity: ISeoEntity | undefined,
    webMedia: IMediaTypeEntity | undefined,
    posMedia: IMediaTypeEntity | undefined,
    mobileMedia: IMediaTypeEntity | undefined
  ) {
    this._categoryEntity.seo = seoEntity?._id;
    this._categoryEntity.webMedia = webMedia?._id;
    this._categoryEntity.posMedia = posMedia?._id;
    this._categoryEntity.mobileMedia = mobileMedia?._id;
  }
  private async createOrUpdateSeo(
    seoModel: SeoModel | undefined
  ): Promise<ISeoEntity | undefined> {
    if (!seoModel) return;

    let seoEntity = instanceToPlain(seoModel) as ISeoEntity;
    if (seoEntity?._id) {
      return this.seoRepository.updateSeo(seoEntity._id, seoEntity);
    }
    return await this.seoRepository.createSeo(seoEntity);
  }

  private async createOrUpdateMediaType(
    mediaTypeModel: MediaTypeModel | undefined
  ): Promise<IMediaTypeEntity | undefined> {
    if (!mediaTypeModel) return;

    let mediaTypeEntity = instanceToPlain(mediaTypeModel, {
      enableCircularCheck: true,
    }) as IMediaTypeEntity;

    if (mediaTypeEntity?._id) {
      return this.mediaTypeRepository.updateMediaType(
        mediaTypeEntity._id,
        mediaTypeEntity
      );
    }
    return await this.mediaTypeRepository.createMediaType(mediaTypeEntity);
  }
  
  async getCategoryById(
    _id: string,
    filterType: string | undefined
  ): Promise<CategoryModel> {
    try {
      let category = await this.categoryRepository.getCategory(_id, filterType);
      return plainToInstance(
        CategoryModel,
        category,
        TransformOptions.tranformOptions
      );
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

}

export default CategoryService;
