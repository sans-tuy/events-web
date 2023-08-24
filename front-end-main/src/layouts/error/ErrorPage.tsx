import { Button, chakra, Flex, Text } from "@chakra-ui/react";
import { type FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  navigateTo?: string;
}

const ErrorPage: FunctionComponent<Props> = ({ navigateTo = "/" }) => {
  const navigate = useNavigate();

  return (
    <chakra.div
      w="100%"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      gap={3}
    >
      <Flex
        bgImage="url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')"
        bgPosition="center"
        backgroundRepeat="no-repeat"
        w={["400px", "600px"]}
        h={["300px", "400px"]}
        textAlign="center"
        alignItems="flex-start"
        justifyContent="center"
      >
        <Text fontWeight={"bold"} fontSize="70px">
          404
        </Text>
      </Flex>
      <chakra.span>Halaman tidak tersedia</chakra.span>
      <Button colorScheme="primary" onClick={() => navigate(navigateTo)}>
        Kembali ke halaman utama
      </Button>
    </chakra.div>
  );
};

export default ErrorPage;
