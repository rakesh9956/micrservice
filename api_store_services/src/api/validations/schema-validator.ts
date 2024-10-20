import { NextFunction,Response,Request } from "express";

function validateRequest(schema:any) {
    return (request:Request, response:Response, next:NextFunction) => {
      const { error } = schema.validate(request.body, { abortEarly: false });
  
      if (error) {
        const errors = error.details.map((detail? : any) => {
            const field = detail.path[0];
            return { [field]: detail.message.replace(/\"/g, "") };
        })
        return response.status(400).json({ errors });
      }
  
      next();
    };
  }
  
  export { validateRequest};