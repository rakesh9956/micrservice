import "reflect-metadata";

export interface IRepositoryBase<T> {
  create(data: T): Promise<T>;
  find(
    filter: Partial<T>,
  ): Promise<T[]>;
  findOne(filter: Partial<T>, populate?: any): Promise<T>;
}
