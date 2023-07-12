import { Text, VStack, Image, Highlight } from "@chakra-ui/react";
import TopSlider from "../components/top-slider";
import Category from "../components/category";
import TopSeller from "../components/smallcomponents/top-seller";
export const sliderImages = [
  "/img/Mens/Mens-slider/1.png",
  "/img/Mens/Mens-slider/2.png",
  "/img/Mens/Mens-slider/3.png",
  "/img/Mens/Mens-slider/4.png",
  "/img/Mens/Mens-slider/5.png",
];

const collectionItems = [
  "./public/img/Mens/Mens-collection/1.png",
  "./public/img/Mens/Mens-collection/2.png",
  "./public/img/Mens/Mens-collection/3.png",
  "./public/img/Mens/Mens-collection/4.png",
  "./public/img/Mens/Mens-collection/5.png",
  "./public/img/Mens/Mens-collection/6.png",
  "./public/img/Mens/Mens-collection/7.png",
  "./public/img/Mens/Mens-collection/8.png",
  "./public/img/Mens/Mens-collection/9.png",
];

const categoryItems = [
  "./public/img/Mens/Mens-Category/1.png 4",
  "./public/img/Mens/Mens-Category/2.png 4",
  "./public/img/Mens/Mens-Category/3.png 4",
  "./public/img/Mens/Mens-Category/4.png 3",
  "./public/img/Mens/Mens-Category/5.png 3",
  "./public/img/Mens/Mens-Category/6.png 3",
  "./public/img/Mens/Mens-Category/7.png 3",
  "./public/img/Mens/Mens-Category/8.png 3",
  "./public/img/Mens/Mens-Category/9.png 3",
  "./public/img/Mens/Mens-Category/10.png 6",
  "./public/img/Mens/Mens-Category/11.png 3",
  "./public/img/Mens/Mens-Category/12.png 3",
  "./public/img/Mens/Mens-Category/13.png 3",
  "./public/img/Mens/Mens-Category/14.png 3",
];

export const officialMerchandise = [
  "./public/img/Official merchandise common/1.png",
  "./public/img/Official merchandise common/2.png",
  "./public/img/Official merchandise common/3.png",
  "./public/img/Official merchandise common/4.png",
  "./public/img/Official merchandise common/5.png",
  "./public/img/Official merchandise common/6.png",
  "./public/img/Official merchandise common/7.png",
  "./public/img/Official merchandise common/8.png",
  "./public/img/Official merchandise common/9.png",
  "./public/img/Official merchandise common/10.png",
];

const topSellerImg = [
  {
    img: "./public/img/Mens/Mens-Topseller/1.png",
    name: "Looney Tunes: Did Somebody Say..",
    type: "Oversized T-Shirts",
    price: "999",
  },
  {
    img: "./public/img/Mens/Mens-Topseller/2.png",
    name: "Stripes: Malibu Blue",
    type: "Shirt",
    price: "999",
  },
  {
    img: "./public/img/Mens/Mens-Topseller/3.png",
    name: "Harry Potter: Slytherin",
    type: "T-Shirt",
    price: "599",
  },
  {
    img: "./public/img/Mens/Mens-Topseller/4.png",
    name: "Batman: HD Logo",
    type: "Jogger",
    price: "1599",
  },
  {
    img: "./public/img/Mens/Mens-Topseller/5.png",
    name: "Harry Potter:Hogwarts ",
    type: "Polo",
    price: "999",
  },
  {
    img: "./public/img/Mens/Mens-Topseller/6.png",
    name: "Solids: Mid-Blue",
    type: "Men Jeans",
    price: "1999 2299 13%",
  },
  {
    img: "./public/img/Mens/Mens-Topseller/7.png",
    name: "Punisher: Logo",
    type: "Shorts",
    price: "999",
  },
  {
    img: "./public/img/Mens/Mens-Topseller/8.png",
    name: "Naruto: Attack",
    type: "Boxer Shorts",
    price: "399 499 20%",
  },
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
      <TopSlider data={sliderImages} collection="topSection" />

      <VStack gap={4} w="100%">
        <Text align="center">COLLECTIONS</Text>

        <TopSlider data={collectionItems} collection="collectionItems" />
      </VStack>

      <VStack gap={4} w="100%">
        <Text align="center">CATEGORIES</Text>
        <Category data={categoryItems} category="mensCategory" />
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
        <Image pr={4} width="94%" src="\img\Membership.png" />
      </VStack>

      <VStack gap={4} w="100%">
        <Text>STRAIGHT OUT OF CELEBRITY CLOSETS</Text>
        <Image pr={4} width="94%" src="\img\bottomBanner.png" />
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
};

export default Men;
