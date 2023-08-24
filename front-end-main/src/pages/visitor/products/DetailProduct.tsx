import useCreateOrder from "@/service/payment/hooks/createOrder";
import useGetProduct from "@/service/products/hooks/getProduct";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Square,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { UilMinus, UilPlus, UilShoppingCart } from "@iconscout/react-unicons";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailProductPage() {
  const param = useParams();
  const { product } = useGetProduct(param.productId!);
  const { createOrder } = useCreateOrder();
  const [quantity, setQuantity] = useState(1);
  const toast = useToast({
    isClosable: true,
    position: "top",
  });

  const handleBuy = async () => {
    const { response, error } = await createOrder({
      quantity,
      status: "pending",
      totalPrice: product?.price ?? 0 * quantity,
      productUuid: product?.uuid ?? "",
    });
    if (response) {
      toast({
        title: "success",
        description: "berhasil melakukan order",
      });
    }
    if (error) {
      toast({ title: "error", description: error.data.msg });
    }
  };

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlus = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <Container maxW={"7xl"} bgColor={"white"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            boxShadow={"xxl"}
            alt={"product image"}
            src={`${product?.url}`}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              textAlign={"left"}
              fontSize={{ base: "l", sm: "xl", lg: "2xl" }}
            >
              {product?.name}
            </Heading>
            <Text
              color={useColorModeValue("blue.500", "blue.400")}
              mt={2}
              mb={-5}
              fontWeight={600}
              fontSize={"4xl"}
              textAlign={"left"}
            >
              {"Rp " + product?.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("black.500", "black.400")}
                fontSize={"xl"}
                fontWeight={"300"}
                textAlign={"left"}
              >
                {product?.description}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("black.500", "black.300")}
                fontWeight={"700"}
                textTransform={"uppercase"}
                textAlign={"left"}
                mb={"4"}
              >
                Event Details
              </Text>
              <Text>{product?.description}</Text>

              <List spacing={2} color={"gray.500"}>
                <ListItem>
                  <Flex>
                    <Text
                      mr={2}
                      textAlign={"left"}
                      as={"span"}
                      fontWeight={"bold"}
                    >
                      Artist:
                    </Text>
                    <Text>{product?.artist?.map((val) => `${val}, `)}</Text>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex>
                    <Text
                      mr={2}
                      textAlign={"left"}
                      as={"span"}
                      fontWeight={"bold"}
                    >
                      Address:
                    </Text>
                    <Text>{product?.address}</Text>
                  </Flex>
                </ListItem>
              </List>
            </Box>
            <Flex gap={6}>
              <Square
                border="1px solid"
                borderColor="info"
                p="1"
                rounded="md"
                onClick={handleMinus}
              >
                <Icon as={UilMinus} />
              </Square>

              <Square>{quantity}</Square>
              <Square
                border="1px solid"
                borderColor="info"
                p="1"
                rounded="md"
                onClick={handlePlus}
              >
                <Icon as={UilPlus} />
              </Square>
            </Flex>
          </Stack>

          <Button
            rounded={"md"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("blue.500", "blue.400")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={handleBuy}
          >
            Buy this event
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <Icon as={UilShoppingCart} />
            <Text>24 hours process</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
