import config from "@/constants/config";
import axios, { CreateAxiosDefaults } from "axios";

function AxiosInstance(configAxios?: CreateAxiosDefaults) {
  const instance = axios.create({
    baseURL: config.BASE_API_URL,
    ...configAxios,
  });

  return instance;
}

export default AxiosInstance;
