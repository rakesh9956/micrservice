import { ReturnSalesInvoiceModel } from "../../domain/models/return-sales-invoice.model";



export interface IReturnSalesInvoiceService {
  createReturnSalesInvoice(
    historyObject: ReturnSalesInvoiceModel
  ): Promise<ReturnSalesInvoiceModel>;
}
