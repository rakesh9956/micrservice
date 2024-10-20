import { Container } from "inversify";
import { ContainerTypes } from "./container-types";
import {IuserController} from '../../api/contracts/iuser-controller'
import userController from '../../api/controllers/userController'
import { IUserService } from "../applications/contracts/i-user-services";
import  userService from "../applications/services/userService";
import { IUserRepository } from "../repositories/contracts/i-user-repository";
import UserRepository from "../repositories/user-repository";
import { IRepositoryBase } from "../repositories/contracts/i-repository-base";
import { IuserEntity } from "../infrastructure/entities/userEntity";
import { RepositoryBase } from "../repositories/repository-base";
import { IproductController } from "../contracts/i-product-controller";
import productController from "../controllers/product-controller";
import productService from "../applications/services/product-service";
import { IProductService } from "../applications/contracts/i-product-services";
import { IproductRepository } from "../repositories/contracts/i-product-repository";
import ProdcutRepository from "../repositories/product-repository";
import { IcityController } from "../contracts/icity-controller";
import CityController from "../controllers/CityController";
import { ICityservices } from "../applications/contracts/i-city-services";
import CityService from "../applications/services/cityService";
import { IcityRepository } from "../repositories/contracts/i-city-repository";
import cityRepository from "../repositories/city-repository";
import { IcityEntity } from "../infrastructure/cityEntity";
import { cityRepositoryBase } from "../repositories/location/city-setting-repository";
import ReturnSalesInvoiceController from "../controllers/return-sales-invoice.controller";
import { IReturnSalesInvoiceRepository } from "../repositories/contracts/ireturn-sales-invoice";
import ReturnSalesInvoiceRepository from "../repositories/return-sales-invoice.repository";
import { IReturnSalesInvoiceService } from "../applications/contracts/ireturn-sales-invoice";
import ReturnSalesInvoiceService from "../applications/services/return-sales-invoice.service";
import { IReturnSalesInvoiceEntity } from "../infrastructure/entities/return-sales-invoice.entity";
import { ReturnSalesInvoiceRepositoryBase } from "../infrastructure/helper/return-sales-invoice.repository-base";
import { IproductEntity } from "../infrastructure/entities/productEntity";
import { ProductRepositoryBase } from "../repositories/product-repository-base";
import { userRepositoryBase } from "../repositories/user-repository-base";

import { CategoryRepositoryBase } from "../repositories/category-repository-base";
import { ICategoryRepository } from "../repositories/contracts/i-category-repository";
import { ICategoryService } from "../applications/contracts/i-category-services";
import CategoryService from "../applications/services/categoryService";
import { ICategoryController } from "../contracts/icategory-controller";
import CategoryController from "../controllers/categoryController";
import { ICategoryEntity } from "../infrastructure/entities/categoryEntity";
import CategoryRepository from "../repositories/category-repository";
import { IMediaTypeEntity } from "../infrastructure/entities/iMediaTypeEntity";
import { IMediaTypeRepository } from "../repositories/contracts/i-media-type.repository";
import { ISeoRepository } from "../repositories/contracts/i-seo.repository";
import { ISeoEntity } from "../infrastructure/entities/iSeoEntity";
import { MediaTypeRepositoryBase } from "../repositories/media-type.repository.base";
import MediaTypeRepository from "../repositories/media-type.repository";
import { SeoRepositoryBase } from "../repositories/seo.repository.base";
import SeoRepository from "../repositories/seo.repository";

let container = new Container();
CityContainer();
container
.bind<IuserController>(ContainerTypes.userController)
.to(userController);
container
.bind<IUserService>(ContainerTypes.userService)
.to(userService);
container
.bind<IUserRepository>(ContainerTypes.UserRepository)
.to(UserRepository);
container
.bind<IRepositoryBase<IuserEntity>>(ContainerTypes.userRepositoryBase)
.to(userRepositoryBase);


container
.bind<IproductController>(ContainerTypes.productController)
.to(productController);

container
.bind<IProductService>(ContainerTypes.productService)
.to(productService);

container
.bind<IproductRepository>(ContainerTypes.productRepository)
.to(ProdcutRepository);

container
.bind<IRepositoryBase<IproductEntity>>(ContainerTypes.productRepositoryBase)
.to(ProductRepositoryBase);

function CityContainer() {
container
.bind<IcityController>(ContainerTypes.CityController)
.to(CityController);
container
.bind<ICityservices>(ContainerTypes.CityService)
.to(CityService);
container
.bind<IcityRepository>(ContainerTypes.cityRepository)
.to(cityRepository);
container
.bind<IRepositoryBase<IcityEntity>>(ContainerTypes.cityRepositorybase)
.to(cityRepositoryBase);
}
// return sales invoice

container
  .bind<IRepositoryBase<IReturnSalesInvoiceEntity>>(
    ContainerTypes.ReturnSalesInvoiceRepositoryBase
  )
  .to(ReturnSalesInvoiceRepositoryBase);
container
  .bind<IReturnSalesInvoiceRepository>(
    ContainerTypes.ReturnSalesInvoiceRepository
  )
  .to(ReturnSalesInvoiceRepository);

container
  .bind<IReturnSalesInvoiceService>(ContainerTypes.ReturnSalesInvoiceService)
  .to(ReturnSalesInvoiceService);
container
  .bind<ReturnSalesInvoiceController>(
    ContainerTypes.ReturnSalesInvoiceController
  )
  .to(ReturnSalesInvoiceController);

container
  .bind<IRepositoryBase<ICategoryEntity>>(ContainerTypes.CategoryRepositoryBase)
  .to(CategoryRepositoryBase);
container
  .bind<ICategoryRepository>(ContainerTypes.CategoryRepository)
  .to(CategoryRepository);
container
  .bind<ICategoryService>(ContainerTypes.CategoryService)
  .to(CategoryService);
container
  .bind<ICategoryController>(ContainerTypes.CategoryController)
  .to(CategoryController);

container
  .bind<IRepositoryBase<IMediaTypeEntity>>(
    ContainerTypes.MediaTypeRepositoryBase
  )
  .to(MediaTypeRepositoryBase);
container
  .bind<IMediaTypeRepository>(ContainerTypes.MediaTypeRepository)
  .to(MediaTypeRepository);

container
  .bind<IRepositoryBase<ISeoEntity>>(ContainerTypes.SeoRepositoryBase)
  .to(SeoRepositoryBase);

container
  .bind<ISeoRepository>(ContainerTypes.SeoRepository)
  .to(SeoRepository);

export { container };