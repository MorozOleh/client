import axios from "axios";

const baseURL = "https://job-api-first.herokuapp.com/api/v1";

const instance = axios.create({
  baseURL,
});

export default instance;
