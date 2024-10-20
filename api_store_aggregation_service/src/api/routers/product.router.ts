import express, { Request, Response } from "express";
import { ICityController } from "../constract/i-city.controller";
import { container } from "../bindings/container-bindings";
import { ContainerTypes } from "../bindings/container-types";
import { IProductController } from "../constract/i-product-controller";


export default function ProductRoute() {
  const router = express.Router();
  const productcontroller = container.get<IProductController>(
    ContainerTypes.ProductController
  );

  router.post("/", (request: Request, response: Response) => {
    productcontroller.createProduct(request, response);
  });

  return router;
}