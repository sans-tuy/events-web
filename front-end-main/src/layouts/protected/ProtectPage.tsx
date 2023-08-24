import { getMe } from "@features/auth/authSlice";
import { useAppSelector } from "@redux/hooks";
import { AnyAction } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

export default function ProtectPage({ children }) {
  const { isSuccess, isLoading, isError, user } = useAppSelector(
    (state) => state.auth
  );
  const [mounted, setMounted] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getMe() as unknown as AnyAction);
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess && !isLoading) {
      if (user?.role !== "admin") {
        navigate("/visitor", { replace: true });
      }
      setMounted(false);
    }
    if (isError && !isLoading) {
      setMounted(true);
      navigate("/login", { replace: true });
    }
  }, [isLoading, isSuccess, isError, user?.role]);

  return <>{mounted ? <Loader /> : children}</>;
}
