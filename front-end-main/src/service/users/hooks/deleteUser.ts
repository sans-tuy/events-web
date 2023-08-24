import AxiosInstance from "@/service/AxiosInstance";
import { mutate } from "swr";

export default function useDeleteUser() {
  const deleteUser = async (userId: string) => {
    try {
      const res = await AxiosInstance().delete(`/users/${userId}`);
      if (res.status === 200) {
        mutate("/users");
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
    deleteUser,
  };
}
