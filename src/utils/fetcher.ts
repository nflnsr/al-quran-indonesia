import axios from "axios";

const axiosInstance = axios.create();

const fetcher = async (url: string) => {
  return (await axiosInstance.get(url)).data;
};

export default fetcher;
