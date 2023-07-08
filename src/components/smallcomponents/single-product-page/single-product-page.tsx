import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { mensItem, womensItem, kidsItem } from "../../../utils/Data";
import { ProductModel } from "../../../utils/model/product-data-model";
import {
  Button,
  Center,
  Divider,
  HStack,
  Image,
  Spinner,
  Stack,
  Text,
  VStack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
 


const SingleProductPage = () => {
  const [data, setData] = useState<ProductModel>();
  const [defaultImg, setDefaultImg] = useState("");
  const [isButLoading, setIsButLoading] = useState<boolean>(false);
  const [bagbutton, setbagbutton] = useState<boolean>(true);
  const { id } = useParams();
  const toast = useToast();
  const color = useColorModeValue("black", "white");

  const handleClick = () => {
    setIsButLoading(true);

    setTimeout(() => {
      toast({
        title: "Added To Cart.",

        description: "shop more or go to cart.",

        duration: 3000,
        isClosable: true,
      });

      setIsButLoading(false);
      // handleCart(data[0]);
      setbagbutton(false);
      // console.log(data[0]);
    }, 1500);
  };

  var value:any;

  useEffect(() => {
    window.scrollTo(0, 0);
    let productData = [...mensItem, ...womensItem, ...kidsItem].find(
      (el: any) => el.id == id
    );

    if (productData) {
      setData(productData);
      setDefaultImg(productData?.Display_image);
      console.log(productData.sizes)
      value = data?.price.split(" ");
    }
  }, []);

  return (
    <Stack
      w="full"
      margin="auto"
      alignSelf="center"
      justifyContent="center"
      direction={{ base: "column", md: "row" }}
      spacing={{ base: 0, sm: 30 }}
      padding={5}
      justify="center"
      style={{ marginTop: "150px", marginBottom: "50px" }}
    >
      {data && (
        <>
          <Stack
            flexDirection={{ base: "column-reverse", md: "row" }}
            spacing={5}
            padding={5}
          >
            <Stack
              direction={{ base: "row", md: "column" }}
              maxH="500px"
              padding={3}
            >
              <ChevronDownIcon
                display={{ base: "none", md: "block" }}
                boxSize="30px"
                color="gray.500"
                cursor="pointer"
              />

              {data?.moreImage.map((img: string, idx: number) => (
                <Image
                  key={idx}
                  borderRadius={5}
                  alt={data.name}
                  maxW={"70"}
                  minW="50px"
                  objectFit="cover"
                  src={img}
                  onClick={() => setDefaultImg(img)}
                  cursor="pointer"
                />
              ))}
              <ChevronUpIcon
                display={{ base: "none", md: "block" }}
                boxSize="30px"
                color="gray.500"
                cursor="pointer"
              />
            </Stack>

            <Stack>
              <Image
                borderRadius={15}
                src={defaultImg}
                maxH="500px"
                minW="200px"
              />
            </Stack>
          </Stack>

          <VStack
            w={{ base: "full", md: "50%" }}
            h={{ base: "full" }}
            padding={{ base: 5, md: 8 }}
            align="revert-layer"
            spacing={5}
          >
            <Stack m={0} p={0} gap={0}>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                color={color}
              >
                {data.name}
              </Text>
              <Text fontSize={{ base: "10px", md: "15px" }} color="gray.500">
                {data.Category}
              </Text>
            </Stack>

            <Stack>
              <HStack alignContent="center">
                <Text fontWeight="bold" fontSize={{ base: "2xl", md: "3xl" }}>
                  ₹{data.price}
                </Text>

                <Text as="s" marginLeft={4} fontSize="xl">
                  90890{/* ₹{data[0].strikeprice} */}
                </Text>
              </HStack>
              <Text>inclusive of all taxes</Text>
            </Stack>

            <Divider />

            <Text>
              TriBe members get an extra discount of ₹20 and FREE shipping.Learn
              more
            </Text>

            <Divider />

            <Text fontWeight="extrabold">SELECT SIZE</Text>

            <HStack spacing={5}>
              <Center
                w={{ base: "40px", lg: "50px" }}
                h={{ base: "40px", lg: "50px" }}
                fontSize={{ base: "sm", lg: "xl" }}
                border="1px solid"
                color="black"
              >
                S
              </Center>
              <Center
                w={{ base: "40px", lg: "50px" }}
                h={{ base: "40px", lg: "50px" }}
                fontSize={{ base: "sm", lg: "xl" }}
                border="1px solid"
                color="black"
              >
                M
              </Center>
              <Center
                w={{ base: "40px", lg: "50px" }}
                h={{ base: "40px", lg: "50px" }}
                fontSize={{ base: "sm", lg: "xl" }}
                border="1px solid"
                color="black"
              >
                L
              </Center>
              <Center
                w={{ base: "40px", lg: "50px" }}
                h={{ base: "40px", lg: "50px" }}
                fontSize={{ base: "sm", lg: "xl" }}
                bg="tomato"
                color="white"
              >
                XL
              </Center>
              <Center
                w={{ base: "40px", lg: "50px" }}
                h={{ base: "40px", lg: "50px" }}
                fontSize={{ base: "sm", lg: "xl" }}
                border="1px solid"
                color="black"
              >
                2XL
              </Center>
              <Center
                w={{ base: "40px", lg: "50px" }}
                h={{ base: "40px", lg: "50px" }}
                fontSize={{ base: "sm", lg: "xl" }}
                border="1px solid"
                color="black"
              >
                3XL
              </Center>
            </HStack>

            <Text>
              Garment: Chest (in Inch): 44.0 Front Length (in Inch): 30.0 Sleeve
              Length (in Inch): 25.5
            </Text>

            <Divider />

            <HStack w="full">
              <Button
                onClick={() => handleClick()}
                fontSize="x-large"
                padding={8}
                w="full"
                colorScheme="yellow"
              >
                <BiShoppingBag
                  fontSize={{ base: "25px", sm: "25px", md: "3xl" }}
                />

                {!isButLoading && bagbutton && "Buy Now"}
                {!isButLoading && !bagbutton && "ADDED"}
                {isButLoading && (
                  <Spinner
                    thickness="4px"
                    speed="0.55s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="lg"
                  />
                )}
              </Button>

              <Button
                fontSize={{ base: "25px", sm: "25px", md: "3xl" }}
                padding={8}
                w="full"
                colorScheme="teal"
                variant="outline"
              >
                <AiOutlineHeart /> WISHLIST
              </Button>
            </HStack>
          </VStack>
        </>
      )}
    </Stack>
  );
};

export default SingleProductPage;
