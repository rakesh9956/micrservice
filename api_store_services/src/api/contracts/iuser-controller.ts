import { Request, Response } from "express";

export interface IuserController {
    createUsers(request: Request, response: Response): Promise<any>;
}