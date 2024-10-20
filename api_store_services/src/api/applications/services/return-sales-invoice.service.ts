import "reflect-metadata";
import {instanceToPlain,plainToInstance,} from "class-transformer";
import { injectable, inject } from "inversify";
import {ReturnSalesInvoiceModel,} from "../../domain/models/return-sales-invoice.model";
import { IReturnSalesInvoiceService } from "../contracts/ireturn-sales-invoice";
import { ContainerTypes } from "../../bindings/container-types";
import { IReturnSalesInvoiceEntity } from "../../infrastructure/entities/return-sales-invoice.entity";
import { IReturnSalesInvoiceRepository } from "../../repositories/contracts/ireturn-sales-invoice";

@injectable()
class ReturnSalesInvoiceService implements IReturnSalesInvoiceService {
  @inject(ContainerTypes.ReturnSalesInvoiceRepository)
  private ReturnSalesInvoiceRepository!: IReturnSalesInvoiceRepository;

  async createReturnSalesInvoice(
    ReturnSalesInvoiceObject: ReturnSalesInvoiceModel
  ): Promise<ReturnSalesInvoiceModel> {
    ReturnSalesInvoiceObject.creationDate = new Date();
    let ReturnSalesInvoiceEntity = instanceToPlain(
      ReturnSalesInvoiceObject
    ) as IReturnSalesInvoiceEntity;
    let createdReturnSalesInvoice =
      await this.ReturnSalesInvoiceRepository.createReturnSalesInvoice(
        ReturnSalesInvoiceEntity
      );
    return plainToInstance(ReturnSalesInvoiceModel, createdReturnSalesInvoice);
  }

}

export default ReturnSalesInvoiceService;
