import AxiosInstance from "@/service/AxiosInstance";
import useSWR, { Fetcher } from "swr";
import { GetProductsTypeResponse } from "../interfaces/get-all-products.types";

export default function useGetProduct(productId: string) {
  const fetcher: Fetcher<GetProductsTypeResponse, string> = (url) =>
    AxiosInstance()
      .get(url)
      .then((res) => res.data);
  const { data, error } = useSWR(`/products/${productId}`, fetcher);

  return {
    product: data,
    error,
    loading: !error && !data,
  };
}
