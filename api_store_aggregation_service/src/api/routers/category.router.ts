import express, { NextFunction, Request, Response } from "express";
import { container } from "../bindings/container-bindings";
import { ContainerTypes } from "../bindings/container-types";
import { ICategoryController } from "../constract/i-category.controller";


export default function categoryRoute() {
  const router = express.Router();
  const categoryContainer = container.get<ICategoryController>(
    ContainerTypes.CategoryController
  );

  router.post("/create", (req: Request, res: Response, next: NextFunction) => {
    categoryContainer.createCategory(req, res).catch(next);
  });


  return router;
}
