import useGetOrder from "@/service/payment/hooks/getOrders";
import { Flex } from "@chakra-ui/react";
import OrderItem from "@modules/visitor/order/OrderItem";

export default function LandingOrder() {
  const { orders } = useGetOrder();
  return (
    <Flex flexDir="column" gap={6} wrap="wrap">
      {orders?.map((val, idx) => (
        <OrderItem
          price={val.totalPrice}
          quantity={val.quantity}
          id={val.orderNumber}
          status={val.status}
          idProduct={val.productUuid}
          key={`list-product-${idx}`}
        />
      ))}
    </Flex>
  );
}
