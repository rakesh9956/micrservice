import { inject, injectable } from "inversify";
import { userModel } from "../../domain/models/userModel";
import { IuserEntity } from "../../infrastructure/entities/userEntity";
import { IUserService } from "../contracts/i-user-services";
import { instanceToPlain, plainToInstance } from "class-transformer";
import { IUserRepository } from "../../repositories/contracts/i-user-repository";
import { ContainerTypes } from "../../bindings/container-types";
@injectable()
class userService implements IUserService  {
    @inject(ContainerTypes.UserRepository)
    private UserRepository!:IUserRepository
  async createUser(addon: userModel): Promise<any> {
    
    let result: any;
    let addonEntity = instanceToPlain(addon) as IuserEntity;
    return await this.UserRepository.createAddon(addonEntity);
  }
}

export default userService;
