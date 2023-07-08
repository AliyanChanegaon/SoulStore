import { VStack } from "@chakra-ui/react";
import { ProductPage } from "../components/smallcomponents/product-page-components/product-page";
import { WomensData } from "../utils/Data";
import { useEffect } from "react";

const WomensProduct = () => {
 
    useEffect(()=>{
   window.scrollTo(0,0)
    },[])
  return (
    <VStack maxW="1400px!important" w="100%">
      <ProductPage {...WomensData} />
    </VStack>
  );
}

export default WomensProduct;