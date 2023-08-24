import useGetProducts from "@/service/products/hooks/getProducts";
import { Grid } from "@chakra-ui/react";
import ProductItem from "@modules/admin/product/ProductItem";

export default function ProductPage() {
  const { products } = useGetProducts();
  return (
    <Grid templateColumns={["1fr", "repeat(4, 1fr)"]} gap={6}>
      {products?.map((val, idx) => (
        <ProductItem
          imageURL={val.url}
          name={val.name}
          price={val.price}
          quantity={10}
          isNew={true}
          rating={5}
          id={val.uuid}
          key={`list-product-${idx}`}
        />
      ))}
    </Grid>
  );
}
