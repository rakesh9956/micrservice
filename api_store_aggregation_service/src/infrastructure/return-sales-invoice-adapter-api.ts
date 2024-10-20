import { injectable } from "inversify";
import { SERVICE_URL } from "../config/config";
import AdapterBase from "./adapter-base";
import { IReturnSalesInvoiceAdapter } from "../constarct/i-return-sales-invoice-adapter";
import { ReturnSalesInvoiceModel } from "../domain/return-sales-invoice.model";

@injectable()
class ReturnSalesInvoiceAdapter
  extends AdapterBase
  implements IReturnSalesInvoiceAdapter
{
  async createReturnSalesInvoice(data : ReturnSalesInvoiceModel) : Promise<any> {
    debugger
    try {
      const url = `${SERVICE_URL.ADMIN_SERVICE_URL}/return-invoice/return-sales-invoice`;
      return await this.jsonAxios({
        url: url,
        method: "post",
        data: data,
      });
    } catch (error: any) {
      throw error;
    }
  }
  }

export default ReturnSalesInvoiceAdapter;
