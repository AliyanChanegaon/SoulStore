import {
  SimpleGrid,
  Text,
  Stack,
  VStack,
  Card,
  CardBody,
  Image,
} from "@chakra-ui/react";
import TopSlider from "../components/TopSlider";
import Collection from "../components/category";
import Category from "../components/category";

const sliderImages: string[] = [
  "./src/img/Mens-slider/1.png",
  "./src/img/Mens-slider/2.png",
  "./src/img/Mens-slider/3.png",
  "./src/img/Mens-slider/4.png",
  "./src/img/Mens-slider/5.png",
];

const collectionItems: string[] = [
  "./src/img/Mens-collection/1.png",
  "./src/img/Mens-collection/2.png",
  "./src/img/Mens-collection/3.png",
  "./src/img/Mens-collection/4.png",
  "./src/img/Mens-collection/5.png",
  "./src/img/Mens-collection/6.png",
  "./src/img/Mens-collection/7.png",
  "./src/img/Mens-collection/8.png",
  "./src/img/Mens-collection/9.png",
];

const categoryItems: string[] = [
  "./src/img/Mens-Category/1.png 4",
  "./src/img/Mens-Category/2.png 4",
  "./src/img/Mens-Category/3.png 4",
  "./src/img/Mens-Category/4.png 3",
  "./src/img/Mens-Category/5.png 3",
  "./src/img/Mens-Category/6.png 3",
  "./src/img/Mens-Category/7.png 3",
  "./src/img/Mens-Category/8.png 3",
  "./src/img/Mens-Category/9.png 3",
  "./src/img/Mens-Category/10.png 6",
  "./src/img/Mens-Category/11.png 3",
  "./src/img/Mens-Category/12.png 3",
  "./src/img/Mens-Category/13.png 3",
  "./src/img/Mens-Category/14.png 3",
];

const Men = () => {
  return (
    <VStack
      w="100%"
      gap={10}
      maxW="1400px!important"
      fontWeight="bold"
      fontSize="2xl"
    >
      <TopSlider data={sliderImages} />

      <VStack w="100%">
        <Text align="center">COLLECTIONS</Text>

        <TopSlider data={collectionItems} collection={true} />
      </VStack>

      <VStack w="100%">
        <Text align="center">CATEGORIES</Text>
        <Category data={categoryItems} />
      </VStack>
    </VStack>
  );
};

export default Men;
