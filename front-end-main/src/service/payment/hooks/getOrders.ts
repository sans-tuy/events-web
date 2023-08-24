import AxiosInstance from "@/service/AxiosInstance";
import useSWR, { Fetcher } from "swr";
import { GetOrdersTypeResponse } from "../interfaces/get-all-orders.types";

export default function useGetOrder() {
  const fetcher: Fetcher<GetOrdersTypeResponse[], string> = (url) =>
    AxiosInstance()
      .get(url)
      .then((res) => res.data);
  const { data, error } = useSWR(`/orders`, fetcher);

  return {
    orders: data,
    error,
    loading: !error && !data,
  };
}
