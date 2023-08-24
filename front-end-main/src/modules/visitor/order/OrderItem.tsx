import useCreateInvoice from "@/service/payment/hooks/createInvoice";
import useGetProduct from "@/service/products/hooks/getProduct";
import {
  Badge,
  Box,
  Button,
  Flex,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useAppSelector } from "@redux/hooks";

interface Props {
  price: number;
  quantity: number;
  id: string;
  idProduct: string;
  status: string;
}

export default function OrderItem(props: Props) {
  const { idProduct, price, quantity, status, id } = props;
  const { product } = useGetProduct(idProduct);
  const { createInvoice } = useCreateInvoice();
  const user = useAppSelector((state) => state.auth.user);
  const toast = useToast({ isClosable: true, position: "top" });

  const handlePayment = async () => {
    const { response, error } = await createInvoice({
      amount: price,
      customer_name: user?.name ?? "",
      description: `Pembayaran ${product?.name}`,
      payer_email: user?.email ?? "",
      productUuid: product?.uuid ?? "",
      orderNumber: id,
    });
    if (response) {
      toast({
        title: "Create Invoice Success",
        description:
          "segera lakukan pembayaran dalam 5 menit\n anda akan diarahkan ke laman pembayaran",
      });

      setTimeout(() => {
        window.open(response.invoice_url, "_blank");
      }, 3000);
    }
    if (error) {
      toast({ title: "Create Invoice Error", description: error.data.msg });
    }
  };

  return (
    <Flex
      border="1px solid"
      borderColor="neutral.100"
      p={[2, 4]}
      flexDir={["column", "row"]}
      rounded="2xl"
      gap={4}
      justifyContent={["center", "space-between"]}
      alignItems={["flex-start", "center"]}
    >
      <Flex
        gap={6}
        alignItems={["flex-start", "center"]}
        flexDir={["column", "row"]}
        w="full"
      >
        <Flex justifyContent={["center", "unset"]} w={["full", "70px"]}>
          <Image src={product?.url} boxSize={["unset", "70px"]} rounded="md" />
        </Flex>
        <Text variant="reg.normal.medium">{product?.name}</Text>
        <Flex justifyContent="space-between" w="full">
          <Text>{quantity} tiket</Text>
          <Text color="blue.300">Rp {price}</Text>
        </Flex>
      </Flex>
      <Badge
        variant="solid"
        colorScheme={
          status === "completed"
            ? "green"
            : status === "pending"
            ? "blackAlpha"
            : "linkedin"
        }
      >
        {status}
      </Badge>
      <Flex gap={6}>
        <Button isDisabled={status === "completed" ? true : false}>
          Batal
        </Button>
        <Button
          isDisabled={status === "completed" ? true : false}
          onClick={handlePayment}
        >
          {status === "completed" ? "Terbayar" : "Bayar"}
        </Button>
      </Flex>
    </Flex>
  );
}
