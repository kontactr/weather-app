import axios from "axios";
import { CONSTANTS, ENV } from "config/constants";

class AxiosWrapper {
  constructor({ baseUrl, timeout }) {
    this.apiCaller = axios.create({
      baseURL: baseUrl,
      timeout,
    });
  }

  get headers() {
    return {
      "Content-Type": "application/json",
    };
  }

  validateStatus = (status) => {
    return status >= 200 && status <= 299;
  };

  transformResponse = (response) => {
    return { data: response.data, axios: response };
  };

  get = (url, params, extraConfigs = undefined) => {
    return this.apiCaller
      .get(url, {
        headers: this.headers,
        params,
        validateStatus: this.validateStatus,
        ...extraConfigs,
      })
      .then(this.transformResponse);
  };

  post = (url, data) => {
    return this.apiCaller
      .post(url, data, {
        headers: this.headers,
        validateStatus: this.validateStatus,
      })
      .then(this.transformResponse);
  };

  put = (url, data) => {
    return this.apiCaller
      .put(url, data, {
        headers: this.headers,
        validateStatus: this.validateStatus,
      })
      .then(this.transformResponse);
  };

  // prefixed with underscored because delete is a reserved word in javascript
  delete = (url) => {
    return this.apiCaller
      .delete(url, {
        headers: this.headers,
        validateStatus: this.validateStatus,
      })
      .then(this.transformResponse);
  };
}

export default new AxiosWrapper({
  baseUrl: ENV.BASE_SERVER_URI,
  timeout: CONSTANTS.API_TIMEOUT,
});
