
import { inject, injectable } from "inversify";
import { productModel } from "../../domain/product.model";
import { ContainerTypes } from "../bindings/container-types";
import { IReturnSalesInvoiceAggregateService } from "../constract/support-services/i-return-sales-invoice-aggregate.service";
import { IReturnSalesInvoiceService } from "../constract/support-services/ireturn-sales-invoice";
import { ReturnSalesInvoiceModel } from "../../domain/return-sales-invoice.model";
@injectable()
export class ReturnSalesInvoiceAggregateService implements IReturnSalesInvoiceAggregateService {
  @inject(ContainerTypes.ReturnSalesInvoiceService)
  private returnSalesInvoiceService!: IReturnSalesInvoiceService;
  
  async createReturnSalesInvoice(returnSalesInvoiceModel: ReturnSalesInvoiceModel): Promise<ReturnSalesInvoiceModel> {
    return await this.returnSalesInvoiceService.createReturnSalesInvoice(returnSalesInvoiceModel)
  }
}
export default ReturnSalesInvoiceAggregateService