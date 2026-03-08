import axios from "axios";

const axiosInstance = axios.create();

const fetcher = async (url: string) => {
  await new Promise((res) => setTimeout(res, 2000));
  return (await axiosInstance.get(url)).data;
};

export default fetcher;
