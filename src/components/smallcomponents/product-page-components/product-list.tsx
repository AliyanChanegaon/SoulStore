import { Grid } from "@chakra-ui/react";
import ProductItem from "./product-item";
import { ProductModel } from "../../../utils/model/product-data-model";

const ProductList = (data: { data: ProductModel[] }) => {
 
  return (
    <Grid
      templateColumns={{ base: "repeat(2,1fr)", md: "repeat(4,1fr)" }}
      fontSize="sm"
      fontWeight="500"
      columnGap={4}
      rowGap={2}
      p={0.5}
      width="95%"
      h="100%"
      border="1px solid #ccd4de"
    >
      {data?.data?.map((el, idx) => (
        <ProductItem key={idx} data={el} />
      ))}
    </Grid>
  );
};

export default ProductList;
