import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { UilShoppingCart, UilStar } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

interface Props {
  isNew?: boolean;
  imageURL: string;
  name: string;
  price: number;
  rating?: number;
  id: string;
  quantity: number;
}

interface RatingProps {
  rating: number;
  numReviews: number;
}

function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box display="flex" alignItems="center">
      {Array(Math.round(rating)).map((_, i) => (
        <UilStar
          key={i}
          style={{ marginLeft: "1" }}
          color={i < rating ? "teal.500" : "gray.300"}
        />
      ))}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

function ProductItem(props: Props) {
  const { imageURL, name, price, quantity, isNew, rating, id } = props;
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
      as={Link}
      to={id}
    >
      {isNew && (
        <Circle
          size="10px"
          position="absolute"
          top={2}
          right={2}
          bg="red.200"
        />
      )}
      <Flex justifyContent="center">
        <Image src={imageURL} alt={`Picture of ${name}`} roundedTop="lg" />
      </Flex>

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          {isNew && (
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              New
            </Badge>
          )}
        </Box>
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Box
            fontSize="2xl"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {name}
          </Box>
          <Tooltip
            label="Add to cart"
            bg="white"
            placement={"top"}
            color={"gray.800"}
            fontSize={"1.2em"}
          >
            <chakra.a href={"#"} display={"flex"}>
              <Icon as={UilShoppingCart} h={7} w={7} alignSelf={"center"} />
            </chakra.a>
          </Tooltip>
        </Flex>

        <Flex justifyContent="space-between" alignContent="center">
          <Rating rating={rating!} numReviews={quantity} />
          <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
            <Box as="span" color={"gray.600"} fontSize="lg">
              Rp
            </Box>
            {price}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default ProductItem;
