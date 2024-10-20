import { injectable } from "inversify";
import ReturnSalesInvoice, { IReturnSalesInvoiceEntity } from "../entities/return-sales-invoice.entity";
import { RepositoryBase } from "../../repositories/repository-base";


@injectable()
export class ReturnSalesInvoiceRepositoryBase extends RepositoryBase<IReturnSalesInvoiceEntity> {
  constructor() {
    super(ReturnSalesInvoice);
  }
}
