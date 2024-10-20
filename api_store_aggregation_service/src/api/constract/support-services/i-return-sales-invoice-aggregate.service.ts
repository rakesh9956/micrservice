import { ReturnSalesInvoiceModel } from "../../../domain/return-sales-invoice.model";

export interface IReturnSalesInvoiceAggregateService{
    createReturnSalesInvoice(product: ReturnSalesInvoiceModel): Promise<ReturnSalesInvoiceModel>;
}