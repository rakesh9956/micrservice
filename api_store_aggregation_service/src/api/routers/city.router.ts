import express, { Request, Response } from "express";
import { ICityController } from "../constract/i-city.controller";
import { container } from "../bindings/container-bindings";
import { ContainerTypes } from "../bindings/container-types";


export default function CityRoute() {
  const router = express.Router();
  const citycontroller = container.get<ICityController>(
    ContainerTypes.CityController
  );

    router.post("/", (request: Request, response: Response) => {
      citycontroller.createCity(request, response);
    });
    return router;
}