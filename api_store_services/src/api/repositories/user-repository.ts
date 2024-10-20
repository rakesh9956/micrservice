import { inject, injectable } from "inversify";
import { IuserEntity } from "../infrastructure/entities/userEntity";
import { IUserRepository } from "./contracts/i-user-repository";
import { ContainerTypes } from "../bindings/container-types";
import { IRepositoryBase } from "./contracts/i-repository-base";
@injectable()
class UserRepository implements IUserRepository {
  @inject(ContainerTypes.userRepositoryBase)
  private addressRepositoryBase!: IRepositoryBase<IuserEntity>;
  
  async createAddon(addonEntity: IuserEntity): Promise<IuserEntity> {
    return this.addressRepositoryBase.create(addonEntity);
  }
}
export default UserRepository;
