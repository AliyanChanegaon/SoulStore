import { VStack } from '@chakra-ui/react';
import React from 'react'
import { ProductPage } from '../components/smallcomponents/product-page-components/product-page';
import { KidsData } from '../utils/Data';
import { useEffect } from "react";

const KidsProduct = () => {
useEffect(()=>{
   window.scrollTo(0,0)
    },[])

    return (
        <VStack maxW="1400px!important" w="100%">
          <ProductPage {...KidsData}  />
        </VStack>
      );
}

export default KidsProduct;