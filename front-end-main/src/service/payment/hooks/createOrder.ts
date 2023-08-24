import AxiosInstance from "@/service/AxiosInstance";
import { mutate } from "swr";
import { OrderCreatePayload } from "../interfaces/create-order-payload.types";

export default function useCreateOrder() {
  const createOrder = async (payload: OrderCreatePayload) => {
    try {
      const res = await AxiosInstance().post("order", payload);
      if (res.status === 201) {
        mutate("/products");
      }
      return {
        response: res.data,
        error: null,
      };
    } catch (error: any) {
      return {
        response: null,
        error: error.response,
      };
    }
  };
  return {
    createOrder,
  };
}
