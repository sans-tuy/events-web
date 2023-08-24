import {
  Button,
  Circle,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  TableCaption,
  TableCaptionProps,
} from "@chakra-ui/react";
import {
  UilAngleDown,
  UilAngleLeft,
  UilAngleRight,
} from "@iconscout/react-unicons";
import { useState } from "react";

type Props = {
  currPage: number;
  totalPage: number;
  goNext: () => void;
  goBack: () => void;
};

export default function TabelFooter({
  currPage,
  totalPage,
  goBack,
  goNext,
  ...restProps
}: TableCaptionProps & Props) {
  const [limit, setlimit] = useState(10);
  return (
    <TableCaption {...restProps}>
      <Flex w="full" justifyContent="flex-end" alignItems="center" gap={6}>
        <Button variant="outline" onClick={() => goBack()}>
          <Icon as={UilAngleLeft} />
        </Button>
        <Circle size="40px" color="white" bg="blue.400">
          {currPage}
        </Circle>
        <Button variant="outline" onClick={() => goNext()}>
          <Icon as={UilAngleRight} />
        </Button>
        <Menu>
          <MenuButton
            as={Button}
            variant="outline"
            rightIcon={<UilAngleDown />}
          >
            {limit}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setlimit(10)}>10</MenuItem>
            <MenuItem onClick={() => setlimit(20)}>20</MenuItem>
            <MenuItem onClick={() => setlimit(30)}>30</MenuItem>
          </MenuList>
        </Menu>
        {limit} of {totalPage} items
      </Flex>
    </TableCaption>
  );
}
