import { TableHeadProps, Thead, Tr } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function TabelHead({
  children,
  ...restProps
}: Props & TableHeadProps) {
  return (
    <Thead {...restProps}>
      <Tr>{children}</Tr>
    </Thead>
  );
}
