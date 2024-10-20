import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { ContainerTypes } from "../bindings/container-types";
import { ReturnSalesInvoiceModel } from "../domain/models/return-sales-invoice.model";
import { IReturnSalesInvoiceService } from "../applications/contracts/ireturn-sales-invoice";

@injectable()
export class ReturnSalesInvoiceController {
  @inject(ContainerTypes.ReturnSalesInvoiceService)
  private returnSalesInvoiceService!: IReturnSalesInvoiceService;

  public async createReturnSalesInvoice(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      let ReturnSalesInvoice: ReturnSalesInvoiceModel = req.body;
      const createdHistory =
        await this.returnSalesInvoiceService.createReturnSalesInvoice(
          ReturnSalesInvoice
        );
      res.json((createdHistory));
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default ReturnSalesInvoiceController;
