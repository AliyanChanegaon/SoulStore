import { HStack, Spacer, Stack, StackItem, VStack } from "@chakra-ui/react";
import ProductHeaders from "../product-page-components/product-headers";
import LeftFilters from "../product-page-components/left-filters";

import TopSlider from "../../top-slider";
import ProductList from "./product-list";
import { useLocation } from "react-router-dom";
import { DataModel } from "../../../utils/model/data-model";

export const ProductPage = (data: DataModel) => {
  console.log(data);
  // const refLoc = useLocation();
  // console.log(refLoc);

  return (
    <VStack maxW="1400px!important" w="100%" flex={5}>
      <Stack maxW="1400px!important" w="100%">
        <TopSlider data={data?.sliderImages} collection="mens-TopSection" />
      </Stack>

      <HStack w="100%" flex={5}>
        <StackItem flex={1}>
          <Spacer />
        </StackItem>

        <StackItem flex={4}>
          <ProductHeaders />
        </StackItem>
      </HStack>

      <Stack flex={5} flexDirection="row">
        <StackItem flex={1}>
          <LeftFilters data={data?.options} />
        </StackItem>
        <StackItem flex={4}>
           <ProductList data={data?.mensItem} /> 
        </StackItem>
      </Stack>

      {/* <Stack>
        <LeftFilters />
          <ProductPage />
        </Stack> */}
    </VStack>
  );
};
