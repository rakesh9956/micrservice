import { ReturnSalesInvoiceModel } from "../domain/return-sales-invoice.model";

export interface IReturnSalesInvoiceAdapter {
    createReturnSalesInvoice(salesInvoice: ReturnSalesInvoiceModel): Promise<ReturnSalesInvoiceModel>;
  }
  