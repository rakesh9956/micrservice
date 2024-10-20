import express, { NextFunction } from "express";
import { container } from "../api/bindings/container-bindings";
import { ContainerTypes } from "../api/bindings/container-types"
import { IproductController } from "../api/contracts/i-product-controller";
import { Request,Response } from "express";
import { productSchema } from "../api/validations/product-validation";
import { validateResponse } from "../api/domain/models/response.model";
const router = express.Router();


export default function productsDetailsRouter() {
    const productsController = container.get<IproductController>(
        ContainerTypes.productController
      );
      const validateProduct = (request:Request, response:Response,next:NextFunction) => {
        const { error } = productSchema.validate(request.body);
        if (error) {
          return response.json(validateResponse(error.details[0].message));;
        }
        next();
      };

      router.post("/", validateProduct,(request: Request, response: Response) => {
        productsController.createProduct(request, response);
      }); 

   return router
}