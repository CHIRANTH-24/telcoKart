import { ResponseBody } from "@/util/api-response";
import Axios, { AxiosError, AxiosRequestConfig } from "axios";
import { toast } from "sonner";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
if (!SERVER_URL) {
  console.error("Server URL is not defined in env!!");
  process.exit(0);
}
export const BASE_URL = `${SERVER_URL}/api/`;

export const axiosInstance = Axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

type AxiosOptions = {
  method: "get" | "post" | "put" | "delete";
  endpoint: string;
  body?: any;
  config?: AxiosRequestConfig;
  showErrorToast?: boolean;
};

/**
 * Custom axios instance
 * @param {AxiosOptions} options - axios options
 */
async function axios<T = any>({
  method,
  endpoint,
  body,
  config,
  showErrorToast = false,
}: AxiosOptions) {
  let data: ResponseBody<T> | null = null,
    error: ResponseBody | null = null;
  try {
    const res = await axiosInstance[method]<ResponseBody<T>>(
      endpoint,
      body,
      config
    );
    data = res.data;
  } catch (err: any) {
    console.log("Axios Error: ", err);
    if (err instanceof AxiosError) {
      error = err.response?.data;
    }
    showErrorToast && toast.error(error?.message || "Something went wrong!!");
  }
  return { data, error };
}

export default axios;
