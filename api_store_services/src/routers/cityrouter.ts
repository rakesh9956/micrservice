import express, {NextFunction, Request,Response} from "express";
import { container } from "../api/bindings/container-bindings";
import { IcityController } from "../api/contracts/icity-controller";
import { ContainerTypes } from "../api/bindings/container-types";
import { validateResponse } from "../api/domain/models/response.model";
import { citySchema } from "../api/validations/city-validation";

export default function CityRouter() {
  const router = express.Router();
  const CityController = container.get<IcityController>(ContainerTypes.CityController);

  const validateProduct = (request:Request, response:Response,next:NextFunction) => {
    const { error } = citySchema.validate(request.body);
    if (error) {
      return response.json(validateResponse(error.details[0].message));
    }
    next();
  };
  router.post("/create",validateProduct, (request: Request, response: Response) => {
    CityController.Createcity(request, response);
  });

  router.get("/get", (request: Request, response: Response) => {
    CityController.getCities(request, response);
  });
  
  return router;
}