import express, { Request, Response } from "express";
import { ReturnSalesInvoiceController } from "../controllers/return-sales-invoice.controller";
import { container } from "../bindings/container-bindings";
import { ContainerTypes } from "../bindings/container-types";
import { IReturnSalesInvoiceController } from "../constract/i-return-sales-invoice.controller";
export default function ReturnSalesInvoiceRouter() {
  const router = express.Router();
  const ReturnSalesInvoiceController =
    container.get<IReturnSalesInvoiceController>(
      ContainerTypes.ReturnSalesInvoiceController
    );

  router.post("/return-sales-invoice",(req: Request, res: Response) => {
    debugger
    ReturnSalesInvoiceController.createReturnSalesInvoice(req, res);
  });
  return router;
}
