import { Highlight, Image, Text, VStack } from "@chakra-ui/react";
import TopSlider from "../components/top-slider";
import { officialMerchandise } from "./men";
import Category from "../components/category";

const sliderImages = [
  "/img/Kids/Kids-Topseller/1.png",
  "/img/Kids/Kids-Topseller/2.png",
  "/img/Kids/Kids-Topseller/3.png",
  "/img/Kids/Kids-Topseller/4.png",
  "/img/Kids/Kids-Topseller/5.png",
];

const collectionItems = [
  "/img/Kids/Kids-ShopByAge/1.png",
  "/img/Kids/Kids-ShopByAge/2.png",
  "/img/Kids/Kids-ShopByAge/3.png",
  "/img/Kids/Kids-ShopByAge/4.png",
];

const ShopItems = [
  "/img/Kids/Kids-ShopByPrice/1.png",
  "/img/Kids/Kids-ShopByPrice/2.png",
  "/img/Kids/Kids-ShopByPrice/3.png",
  "/img/Kids/Kids-ShopByPrice/4.png",
];

const categoryItems = [
  "/img/Kids/Kids-Category/1.png",
  "/img/Kids/Kids-Category/2.png",
  "/img/Kids/Kids-Category/3.png",
  "/img/Kids/Kids-Category/4.png",
  "/img/Kids/Kids-Category/5.png",
  "/img/Kids/Kids-Category/6.png",
  "/img/Kids/Kids-Category/7.png",
  "/img/Kids/Kids-Category/8.png",
];

export default function Kid() {
  return (
    <VStack
      w="100%"
      gap={10}
      maxW="1400px!important"
      fontWeight="bold"
      fontSize="2xl"
    >
      <TopSlider data={sliderImages} collection="topSection" />

      <VStack gap={4} w="100%">
        <Text align="center">COLLECTIONS</Text>

        <TopSlider data={collectionItems} collection="collectionItems" />
      </VStack>

      <VStack gap={4} w="100%">
        <Text align="center">OFFICIAL MERCHANDISE</Text>
        <TopSlider
          data={officialMerchandise}
          collection="officialMerchandise"
        />
      </VStack>

      <VStack gap={4} w="100%">
        <Text align="center">SHOP BY PRICE</Text>
        <TopSlider data={ShopItems} collection="collectionItems" />
      </VStack>

      <VStack gap={4} w="100%">
        <Text align="center">CATEGORIES</Text>
        <Category data={categoryItems} category="kidsCategory" />
      </VStack>

      <VStack gap={4} w="100%">
        <Text align="center">MEMBERSHIP</Text>
        <Image pr={4} width="94%" src=".\src\img\Membership.png" />
      </VStack>

      <VStack gap={4} w="100%">
        <Text
          color="whiteAlpha.900"
          bgColor="red"
          w="100%"
          align="center"
          fontSize="1.4em"
          fontWeight="500"
          letterSpacing="1.5px"
          line-height="1.1"
        >
          HOMEGROWN INDIAN BRAND
        </Text>
        <Text align="center" fontSize="1.6em" fontWeight="400">
          <Highlight query="6 Million" styles={{ py: "1", fontWeight: "700" }}>
            Over 6 Million Happy Customers
          </Highlight>
        </Text>
      </VStack>
    </VStack>
  );
}
