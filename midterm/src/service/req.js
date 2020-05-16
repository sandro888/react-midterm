import axios from "axios";
export const API_BASE_URL = "https://reqres.in/api";
axios.defaults.baseURL = config.API_BASE_URL;
export const makeGetReq = url =>
  axios
    .get(url)
    .then(res => res)
    .catch(error => {
      throw error;
});
export const makePostReq = params =>
  axios
    .post(params.url, params.data)
    .then(res => res)
    .catch(error => {
      throw error;
});


