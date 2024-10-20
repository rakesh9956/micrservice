import mongoose, { FilterQuery } from "mongoose";
import { IRepositoryBase } from "./contracts/i-repository-base";
import { injectable, unmanaged } from "inversify";
@injectable()
export class RepositoryBase<T> implements IRepositoryBase<T> {
  protected model: mongoose.Model<T>;
  constructor(@unmanaged() entityName: mongoose.Model<any>) {
    this.model = entityName as mongoose.Model<T>;
  }
    public async create<T>(data: T): Promise<T> {
      const newRecord = new this.model(data);
      return newRecord.save() as Promise<T>;
    }
    public find = async (
      query: Object,
      populate?: any,
    ): Promise<Array<T>> => {
      return await this.model
        .find(query)
        .populate(populate ?? "")
        .exec();
    };
    public async findOne<T>(selectQuery: Partial<T>, populate: any): Promise<T> {
      return this.model
        .findOne(selectQuery as FilterQuery<T>)
        .populate(populate || "")
        .exec() as Promise<T>;
    }
}