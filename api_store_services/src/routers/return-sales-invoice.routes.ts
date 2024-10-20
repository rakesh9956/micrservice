import express, { NextFunction, Request, Response } from "express";
import { ContainerTypes } from "../api/bindings/container-types";
import { container } from "../api/bindings/container-bindings";
import { ReturnSalesInvoiceController } from "../api/controllers/return-sales-invoice.controller";
import { validateResponse } from "../api/domain/models/response.model";
import { returnSalesInvoiceSchema } from "../api/validations/ReturnSalesInvoice-validation";
export default function ReturnSalesInvoiceRouter() {
  const router = express.Router();
  const ReturnSalesInvoiceController =
    container.get<ReturnSalesInvoiceController>(
      ContainerTypes.ReturnSalesInvoiceController
    );
    const validatereturnSalesInvoice = (request:Request, response:Response,next:NextFunction) => {
      const { error } = returnSalesInvoiceSchema.validate(request.body);
      if (error) {
        return response.json(validateResponse(error.details[0].message));;
      }
      next();
    };
  router.post("/return-sales-invoice",validatereturnSalesInvoice, (req: Request, res: Response) => {
    ReturnSalesInvoiceController.createReturnSalesInvoice(req, res);
  });
  return router;
}
