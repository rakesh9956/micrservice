import { IuserEntity } from "../../infrastructure/entities/userEntity";

export interface IUserRepository {
  createAddon(
    businessLogo: IuserEntity
  ): Promise<IuserEntity>;
  
}
