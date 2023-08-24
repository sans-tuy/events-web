import AxiosInstance from "@/service/AxiosInstance";
import useSWR, { Fetcher } from "swr";
import { GetUsersTypeResponse } from "../interface/get-all-users.types";

export default function useGetUsers() {
  const fetcher: Fetcher<GetUsersTypeResponse[], string> = (url) =>
    AxiosInstance()
      .get(url)
      .then((res) => res.data);
  const { data, error } = useSWR("/users", fetcher);

  return {
    users: data,
    error,
    loading: !error && !data,
  };
}
