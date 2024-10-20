import { injectable } from "inversify";
import { RepositoryBase } from "./repository-base";
import Addon,{IuserEntity} from "../infrastructure/entities/userEntity";

@injectable()
export class userRepositoryBase extends RepositoryBase<IuserEntity> {
  constructor() {
    super(Addon);
  }
}
