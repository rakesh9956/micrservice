import axios from "axios";
import { injectable } from "inversify";

@injectable()
class AdapterBase {
  async jsonAxios(options: any){      
    // fetch the response and handle response status codes and payload
    return axios(options)
      .then((response: any) => {
        if (!response.data.status) {
          let error = {
            status:response.data.status,
            code: response.data.code,
            error: response.data.error,
          };
          throw Object.assign(error);
        }
        return response.data.data;
      })
      .catch((error: any) => {
        console.log(error);
        
        if (error.code && error.error) throw error;
        else if (error && error.response && error.response.data) {
          throw error.response.data;
        } else {
          let port = error && error.port;
          let err = {
            message: "unable to reach service " + port,
          };
          throw Object.assign({ code: 503, error: err });
        }
      });
  }

  async postRequest(url: string, requestValue: Object){
    try {
      const options = {
        url: url,
        method: "post",
        data: requestValue,
      };
      return await this.jsonAxios(options);
    } catch (err: any) {
      throw Object.assign(err);
    }
  }
}
export default AdapterBase;