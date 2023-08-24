import { Flex, chakra, Button, useToast } from "@chakra-ui/react";
import InputForm from "@components/reusable/InputForm";
import { LoginUser, reset } from "@features/auth/authSlice";
import { useAppSelector } from "@redux/hooks";
import { AnyAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

type FormData = {
  username: string;
  password: string;
};

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast({ isClosable: true, position: "top" });
  const { isError, isLoading, isSuccess, message, user } = useAppSelector(
    (state) => state.auth
  );
  const methods = useForm<FormData>({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "login",
        description: "anda berhasil login",
      });
      dispatch(reset());
      navigate("/");
    }
    if (isError) {
      toast({
        title: "error",
        description: message as string,
      });
    }
    dispatch(reset());
  }, [isError, isSuccess, user]);

  const onSubmit = methods.handleSubmit((data) => {
    dispatch(
      LoginUser({
        email: data.username,
        password: data.password,
      }) as unknown as AnyAction
    );
  });
  return (
    <Flex
      w="full"
      h="100vh"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      border="1px solid"
    >
      <header>LOGIN</header>
      <FormProvider {...methods}>
        <chakra.form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          w={["80vw", "25vw"]}
        >
          <InputForm name="username" label="Username" isRequired mb="4" />
          <InputForm
            name="password"
            label="Password"
            isRequired
            type="password"
            withShowPasswordButton={true}
            mb="4"
          />
          <Button isLoading={isLoading} type="submit">
            SUBMIT
          </Button>
        </chakra.form>
      </FormProvider>
    </Flex>
  );
}
