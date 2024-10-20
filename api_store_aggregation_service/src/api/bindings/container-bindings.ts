import { Container } from "inversify";
import { ICityAdapter } from "../../constarct/i-city-adapter";
import CityAdapter from "../../infrastructure/city.adapter";
import { ICityController } from "../constract/i-city.controller";
import { ICityAggregateService } from "../constract/support-services/i-city-aggrigate.service";
import { ICityService } from "../constract/support-services/i-city-service";
import { citycontroller } from "../controllers/citycontoller";
import CityAggregateService from "../services/city.aggrigate.service";
import cityService from "../services/city.service";
import { ContainerTypes } from "./container-types";
import ProductAdapter from "../../infrastructure/product-adapter";
import { IProductAdapter } from "../../constarct/i-product-adapter";
import { IProductAggregateService } from "../constract/support-services/i-product-aggregate.service";
import ProductAggregateService from "../services/product-aggregate.service";
import { IProductService } from "../constract/support-services/i-product-service";
import productService from "../services/product-service";
import { IProductController } from "../constract/i-product-controller";
import { Productcontroller } from "../controllers/product-controller";
import CategoryAdapter from "../../infrastructure/category.adapter";
import { ICategoryAdapter } from "../../constarct/i-category.adapter";
import { ICategoryController } from "../constract/i-category.controller";
import { ICategoryAggregateService } from "../constract/support-services/i-category-aggregate.service";
import { ICategoryService } from "../constract/support-services/i-category.service";
import CategoryController from "../controllers/category.controller";
import CategoryAggregateService from "../services/category-aggregate.service";
import CategoryService from "../services/category.service";
import { IReturnSalesInvoiceAdapter } from "../../constarct/i-return-sales-invoice-adapter";
import ReturnSalesInvoiceAdapter from "../../infrastructure/return-sales-invoice-adapter-api";
import { IReturnSalesInvoiceService } from "../constract/support-services/ireturn-sales-invoice";
import ReturnSalesInvoiceService from "../services/return-sales-invoice.service";
import ReturnSalesInvoiceController from "../controllers/return-sales-invoice.controller";
import { IReturnSalesInvoiceController } from "../constract/i-return-sales-invoice.controller";
import { IReturnSalesInvoiceAggregateService } from "../constract/support-services/i-return-sales-invoice-aggregate.service";


export const container = new Container();
cityContainer();
productContainer();
categoryContainer();
ReturnSalesInvoiceContainer();

function cityContainer() {
    container.bind<ICityAdapter>(ContainerTypes.CityAdapter).to(CityAdapter);
    container
      .bind<ICityAggregateService>(ContainerTypes.CityAggregateService)
      .to(CityAggregateService);
    container.bind<ICityService>(ContainerTypes.CityService).to(cityService);
    container
      .bind<ICityController>(ContainerTypes.CityController)
      .to(citycontroller);
  }

  function productContainer() {
    container.bind<IProductAdapter>(ContainerTypes.ProductAdapter).to(ProductAdapter);
    container
      .bind<IProductAggregateService>(ContainerTypes.ProductAggregateService)
      .to(ProductAggregateService);
    container.bind<IProductService>(ContainerTypes.ProductService).to(productService);
    container
      .bind<IProductController>(ContainerTypes.ProductController)
      .to(Productcontroller);
  }

  
function categoryContainer() {
  container
  .bind<ICategoryAdapter>(ContainerTypes.CategoryAdapter)
  .to(CategoryAdapter);
  container
    .bind<ICategoryService>(ContainerTypes.CategoryService)
    .to(CategoryService);
  container
    .bind<ICategoryController>(ContainerTypes.CategoryController)
    .to(CategoryController);
  container
    .bind<ICategoryAggregateService>(ContainerTypes.CategoryAggregateService)
    .to(CategoryAggregateService);
}
function ReturnSalesInvoiceContainer() {
container
  .bind<IReturnSalesInvoiceAdapter>(ContainerTypes.ReturnSalesInvoiceAdapter)
  .to(ReturnSalesInvoiceAdapter);
container
  .bind<IReturnSalesInvoiceService>(ContainerTypes.ReturnSalesInvoiceService)
  .to(ReturnSalesInvoiceService);
container
  .bind<IReturnSalesInvoiceAggregateService>(
    ContainerTypes.ReturnSalesAggregateInvoiceService
  )
  .to(ReturnSalesInvoiceService);
container
  .bind<IReturnSalesInvoiceController>(
    ContainerTypes.ReturnSalesInvoiceController
  )
  .to(ReturnSalesInvoiceController)
}
