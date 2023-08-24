import { TableBodyProps, Tbody } from "@chakra-ui/react";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function TabelBody({
  children,
  ...restProps
}: Props & TableBodyProps) {
  return <Tbody {...restProps}>{children}</Tbody>;
}
