import {
  FormProvider,
  FormProviderProps,
  SubmitHandler,
} from "react-hook-form";
import { chakra, StyleProps } from "@chakra-ui/react";

interface Props extends FormProviderProps<any>, StyleProps {
  handleOnSubmit: SubmitHandler<any>;
}

export default function FormWrapper(props: Props) {
  const { handleOnSubmit, children } = props;
  return (
    <FormProvider {...props}>
      <chakra.form onSubmit={props.handleSubmit(handleOnSubmit)} {...props}>
        {children}
      </chakra.form>
    </FormProvider>
  );
}
