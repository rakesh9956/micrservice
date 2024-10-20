import { inject, injectable } from "inversify";
import { ContainerTypes } from "../../api/bindings/container-types";
import { IRepositoryBase } from "./contracts/i-repository-base";
import { IReturnSalesInvoiceEntity } from "../infrastructure/entities/return-sales-invoice.entity";
import { IReturnSalesInvoiceRepository } from "./contracts/ireturn-sales-invoice";

@injectable()
class ReturnSalesInvoiceRepository implements IReturnSalesInvoiceRepository {
  @inject(ContainerTypes.ReturnSalesInvoiceRepositoryBase)
  private ReturnSalesInvoiceRepositoryBase!: IRepositoryBase<IReturnSalesInvoiceEntity>;

  async createReturnSalesInvoice(
    ReturnSalesInvoiceEntity: IReturnSalesInvoiceEntity
  ): Promise<IReturnSalesInvoiceEntity> {
    return this.ReturnSalesInvoiceRepositoryBase.create(
      ReturnSalesInvoiceEntity
    );
  }
}
export default ReturnSalesInvoiceRepository;
