import express, { NextFunction, Request, Response } from "express";
import { container } from "../api/bindings/container-bindings";
import { ICategoryController } from "../api/contracts/icategory-controller";
import { ContainerTypes } from "../api/bindings/container-types"
import { categoryModelSchema } from "../api/validations/category-validation";
import { validateResponse } from "../api/domain/models/response.model";
import { validateRequest } from "../api/validations/schema-validator";

export default function categoryRoute() {
  const router = express.Router();
  const categoryContainer = container.get<ICategoryController>(
    ContainerTypes.CategoryController
  );

  router.post("/create", validateRequest(categoryModelSchema),(request: Request, response: Response) => {
    categoryContainer.createCategory(request, response);
  }); 

  router.get("/getCategoryById/:id", (request: Request, response: Response, next: NextFunction) => {
    categoryContainer.getCategoryById(request, response).catch(next);
  });

  return router;
}
