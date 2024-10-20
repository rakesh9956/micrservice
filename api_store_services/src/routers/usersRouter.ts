import express from 'express';
import { container } from "../api/bindings/container-bindings";
import {IuserController} from '../api/contracts/iuser-controller'
import { ContainerTypes } from "../api/bindings/container-types"
import "reflect-metadata";
const router = express.Router();
import  {userSchema}  from '../api/validations/user-schema-validation';
import {validateRequest} from '../api/validations/schema-validator'
export default function userDetailsRouter() {
    const userController = container.get<IuserController>(
        ContainerTypes.userController
      );

      router.post('/createUsers', 
      validateRequest(userSchema),
      async (request, response) => {
        try {
            const result = await userController.createUsers(request, response)
            response.send(result);
        } catch (error) {
            response.status(500).send('Error fetching users'); 
        }
    });

    return router;
}
