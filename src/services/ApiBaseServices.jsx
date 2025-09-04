import axios from "axios";

const ApiBaseServices = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_STAGE_URL,
});

// Add a request interceptor
ApiBaseServices.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
ApiBaseServices.interceptors.response.use(
  async function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger

    // Do something with response data
    return response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger

    //This is for Auth service
    // if (error.response?.status === 401) {
    //     await refreshToken();
    //   console.log("Refreshtoken api calling");
    //   return ApiBaseServices(error.config); // Retry original request
    // }

    // throw error;

    // Do something with response error
    return Promise.reject(error);
  }
);

export default ApiBaseServices;
