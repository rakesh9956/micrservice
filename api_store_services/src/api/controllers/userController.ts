import { inject, injectable } from "inversify";
import { IuserController } from "../contracts/iuser-controller";
import { Request, Response } from "express";
import { userModel } from "../domain/models/userModel";
import { ContainerTypes } from "../bindings/container-types";
import "reflect-metadata";
import { IUserService } from "../applications/contracts/i-user-services";
import { successResponse } from "../domain/models/response.model";
@injectable()
class userController implements IuserController {
  @inject(ContainerTypes.userService)
  private userService!: IUserService;

  async createUsers(request: Request, response: Response): Promise<any> {
    try {
      let addon: userModel = request.body;
      const result = this.userService.createUser(addon);
      response.json(successResponse(result));
    } catch (e: any) {
      let error = {
        message: e?.message,
        e: e,
      };
      return response.json(error);
    }
  }
}

export default userController;
