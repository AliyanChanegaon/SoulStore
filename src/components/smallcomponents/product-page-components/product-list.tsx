import { Grid } from "@chakra-ui/react";
import ProductItem from "./product-item";
import { ProductModel } from "../../../utils/models/product-data-model";


interface ProductListProps{
 data: ProductModel[];
           name: string ;
           filterCondition:(item: ProductModel) => void
          
}

const ProductList:React.FC<ProductListProps>= ({data, name , filterCondition}) => {
 
  return (
    <Grid
      templateColumns={{ base: "repeat(2,1fr)", md: "repeat(3,1fr)" , lg: "repeat(4,1fr)" }}
      fontSize="sm"
      fontWeight="500"
      columnGap={{base:0,md:0.5,lg:4}}
      rowGap={{base:0,md:2}}
      p={0.5}
      width={{base:"100%",lg:"95%"}}
      h="100%"
      // border={{base:"none",md:"1px solid #ccd4de"}}
    >
      {data &&
        data
          ?.filter(filterCondition)

          .map((el, idx) => (
            <ProductItem key={idx} data={el} name={name} />
          ))}
    </Grid>
  );
};

export default ProductList;
