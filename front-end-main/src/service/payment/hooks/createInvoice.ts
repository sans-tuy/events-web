import AxiosInstance from "@/service/AxiosInstance";
import { mutate } from "swr";
import { InvoiceCreatePayload } from "../interfaces/create-invoice-payload.types";

export default function useCreateInvoice() {
  const createInvoice = async (payload: InvoiceCreatePayload) => {
    try {
      const res = await AxiosInstance().post("invoice", payload);
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
    createInvoice,
  };
}
