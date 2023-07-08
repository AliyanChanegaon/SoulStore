import { VStack } from "@chakra-ui/react";
import { ProductPage } from "../components/smallcomponents/product-page-components/product-page";
import { MensData } from "../utils/Data";
import { useEffect } from "react";

const MensProduct = () => {
 useEffect(()=>{
window.scrollTo(0,0)
 },[])
  return (
    <VStack maxW="1400px!important" w="100%">
      <ProductPage {...MensData} />
    </VStack>
  );
};

export default MensProduct;
