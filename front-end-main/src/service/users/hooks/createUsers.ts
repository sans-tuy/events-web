import AxiosInstance from "@/service/AxiosInstance";
import { AxiosProgressEvent } from "axios";
import { useState } from "react";
import { mutate } from "swr";
import { UserCreatePayload } from "../interface/create-user-payload.types";

export default function useCreateUser() {
  const [progresloadded, setprogresloadded] = useState<number>(0);
  const createUser = async (payload: UserCreatePayload) => {
    try {
      const res = await AxiosInstance().post("users", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total!
          );
          setprogresloadded(percentCompleted);
        },
      });
      if (res.status === 201) {
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
        progresloadded,
      };
    }
  };
  return {
    createUser,
  };
}
