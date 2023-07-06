import { Highlight, Image, Stack, Text, VStack } from "@chakra-ui/react";
import TopSlider from "../components/top-slider";
import Category from "../components/category";
import { officialMerchandise } from "./men";
import TopSeller from "../components/smallcomponents/top-seller";

const sliderImages = [
  "./src/img/Womens/Womens-slider/1.png",
  "./src/img/Womens/Womens-slider/2.png",
  "./src/img/Womens/Womens-slider/3.png",
  "./src/img/Womens/Womens-slider/4.png",
  "./src/img/Womens/Womens-slider/5.png",
];

const collectionItems = [
  "./src/img/Womens/Womens-collection/1.png",
  "./src/img/Womens/Womens-collection/2.png",
  "./src/img/Womens/Womens-collection/3.png",
  "./src/img/Womens/Womens-collection/4.png",
  "./src/img/Womens/Womens-collection/5.png",
  "./src/img/Womens/Womens-collection/6.png",
];

const categoryItems = [
  "./src/img/Womens/Womens-Category/1.png 4",
  "./src/img/Womens/Womens-Category/2.png 4",
  "./src/img/Womens/Womens-Category/3.png 4",
  "./src/img/Womens/Womens-Category/4.png 4",
  "./src/img/Womens/Womens-Category/5.png 4",
  "./src/img/Womens/Womens-Category/6.png 4",
  "./src/img/Womens/Womens-Category/7.png 3",
  "./src/img/Womens/Womens-Category/8.png 3",
  "./src/img/Womens/Womens-Category/9.png 3",
  "./src/img/Womens/Womens-Category/10.png 3",
];

const ShopItems = [
  "./src/img/Womens/Womens-ShopByColor/1.png",
  "./src/img/Womens/Womens-ShopByColor/2.png",
  "./src/img/Womens/Womens-ShopByColor/3.png",
  "./src/img/Womens/Womens-ShopByColor/4.png",
  "./src/img/Womens/Womens-ShopByColor/5.png",
  "./src/img/Womens/Womens-ShopByColor/6.png",
];

const topSellerImg = [
  {
    img: "./src/img/Womens/Womens-Topseller/1.png",
    name: "Solids: Off White",
    type: "Women Dresses",
    price: "1903",
  },
  {
    img: "./src/img/Womens/Womens-Topseller/2.png",
    name: "Solids: Fusion Coral",
    type: "Women Boyfriend Shirts",
    price: "1343",
  },
  {
    img: "./src/img/Womens/Womens-Topseller/3.png",
    name: "Parachute Pants: Hawaiian Surf",
    type: "Women pants",
    price: "1679",
  },
  {
    img: "./src/img/Womens/Womens-Topseller/4.png",
    name: "Solids: Light Olive",
    type: "Women Dresses",
    price: "1903",
  },
  {
    img: "./src/img/Womens/Womens-Topseller/5.png",
    name: "Reality Sucks",
    type: "Women Cargo Joggers",
    price: "1455",
  },
  {
    img: "./src/img/Womens/Womens-Topseller/6.png",
    name: "TSS Originals: Indie Stripes",
    type: "Women Playsuit",
    price: "1455",
  },
  {
    img: "./src/img/Womens/Womens-Topseller/7.png",
    name: "Solids: Papaya Set",
    type: "Women's Co-ord Set",
    price: "1791 2127 16%",
  },
];
const Women = () => {
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
        <Text align="center">CATEGORIES</Text>
        <Category data={categoryItems} category="womensCategory" />
      </VStack>

      <VStack gap={4} w="100%">
        <Text align="center">SHOP BY COLOUR</Text>
        <TopSlider data={ShopItems} collection="collectionItems" />
      </VStack>

      <VStack gap={4} w="100%">
        <Text align="center">OFFICIAL MERCHANDISE</Text>
        <TopSlider
          data={officialMerchandise}
          collection="officialMerchandise"
        />
      </VStack>

      <VStack gap={4} w="100%">
        <Text align="center">TOP SELLING</Text>
        <TopSeller data={topSellerImg} />
      </VStack>

      <VStack gap={4} w="100%">
        <Text align="center">MEMBERSHIP</Text>
        <Image pr={4} width="94%" src=".\src\img\Membership.png" />
      </VStack>

      <Stack flexDirection="row">
        <Text align="center" fontSize="1.6em" fontWeight="400">
          <Highlight query="6 Million" styles={{ py: "1", fontWeight: "700" }}>
            Over 6 Million Happy Customers
          </Highlight>
        </Text>
      </Stack>
    </VStack>
  );
};

export default Women;
