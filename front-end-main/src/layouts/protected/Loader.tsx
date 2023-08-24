import { Flex, Spinner } from "@chakra-ui/react";
import { FunctionComponent } from "react";

const Loader: FunctionComponent = () => (
  <Flex
    w="full"
    h="100vh"
    pos="fixed"
    top="0"
    left="0"
    align="center"
    justify="center"
  >
    <Spinner boxSize="34px" color="info.600" speed="0.6s" />
  </Flex>
);

export default Loader;
