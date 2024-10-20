import { inject, injectable } from "inversify";
import { IReturnSalesInvoiceService } from "../constract/support-services/ireturn-sales-invoice";
import { IReturnSalesInvoiceAdapter } from "../../constarct/i-return-sales-invoice-adapter";
import { ContainerTypes } from "../bindings/container-types";
import { ReturnSalesInvoiceModel } from "../../domain/return-sales-invoice.model";


@injectable()
class ReturnSalesInvoiceService implements IReturnSalesInvoiceService {
  @inject(ContainerTypes.ReturnSalesInvoiceAdapter)
  private returnSalesInvoiceAdapter!: IReturnSalesInvoiceAdapter;
  async createReturnSalesInvoice(data: ReturnSalesInvoiceModel): Promise<any> {
    return await this.returnSalesInvoiceAdapter.createReturnSalesInvoice(data);
  }
}

export default ReturnSalesInvoiceService;
