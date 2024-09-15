import { ResponseBody } from "@/util/api-response";
import Axios, { AxiosError, AxiosRequestConfig } from "axios";
import { toast } from "sonner";

export const BASE_URL = "http://localhost:3000/api/";

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
