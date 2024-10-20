import { Request, Response } from "express";
export interface IReturnSalesInvoiceController {
    createReturnSalesInvoice(request: Request, response: Response): Promise<any>;
}