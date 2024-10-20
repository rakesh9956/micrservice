

import { userModel } from "../../domain/models/userModel";

export interface IUserService {
  createUser(addon: userModel): Promise<userModel>;
}