
export interface IRepositoryBase<T> {
  create(data: T): Promise<T>
}
