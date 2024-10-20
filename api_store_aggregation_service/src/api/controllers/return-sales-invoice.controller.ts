import { Request, Response, response } from "express";
import { inject, injectable } from "inversify";
import { ContainerTypes } from "../bindings/container-types";
import { IReturnSalesInvoiceService } from "../constract/support-services/ireturn-sales-invoice";
import { ReturnSalesInvoiceModel } from "../../domain/return-sales-invoice.model";
import { IReturnSalesInvoiceController } from "../constract/i-return-sales-invoice.controller";
import { IReturnSalesInvoiceAggregateService } from "../constract/support-services/i-return-sales-invoice-aggregate.service";

@injectable()
export class ReturnSalesInvoiceController  implements IReturnSalesInvoiceController {
  @inject(ContainerTypes.ReturnSalesAggregateInvoiceService)
  private returnSalesAggregateInvoiceService!: IReturnSalesInvoiceAggregateService;


  public async createReturnSalesInvoice(
    req: Request,
    res: Response
  ): Promise<any> {
    try {
      let ReturnSalesInvoice: ReturnSalesInvoiceModel = req.body;
      const createdHistory =
        await this.returnSalesAggregateInvoiceService.createReturnSalesInvoice(
          ReturnSalesInvoice
        );
      res.json((createdHistory));
    } catch (error) {
     return res.json(error);
    }
  }
}

export default ReturnSalesInvoiceController;
