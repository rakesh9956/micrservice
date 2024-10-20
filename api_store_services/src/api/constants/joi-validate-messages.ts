
const customErrorMessages=(errors: any,docmentName?:string)=> {
    errors.forEach((err:any) => {
      switch (err.code) {
        case "any.required":
            err.message = `"${err.local.label}" is required!`;
          break;
        case "string.empty":
            err.message = `"${err.local.label}" should not be empty!`;
          break;
        case "string.min":
          err.message = `Value should have at least ${err.local.limit} characters!`;
          break;
        case "string.max":
          err.message = `Value should have at most ${err.local.limit} characters!`;
          break;
        default:
          break;
      }
    });
    return errors;
  }
export {
    customErrorMessages
}