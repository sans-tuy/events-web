import { Table, TableContainer, TableProps } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function TabelWrapper({
  children,
  ...restProps
}: TableProps & Props) {
  return (
    <TableContainer rounded="lg" {...restProps}>
      <Table {...restProps}>{children}</Table>
    </TableContainer>
  );
}
