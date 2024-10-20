import { IReturnSalesInvoiceEntity } from "../../infrastructure/entities/return-sales-invoice.entity";

export interface IReturnSalesInvoiceRepository {
  createReturnSalesInvoice(
    IReturnSalesInvoiceEntity: IReturnSalesInvoiceEntity
  ): Promise<IReturnSalesInvoiceEntity>;

}
