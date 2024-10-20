import { Request, Response } from "express";

export interface ICategoryController {
  createCategory(req: Request, res: Response): Promise<void>;
  getCategoryById(req: Request, res: Response): Promise<void>;
}
