import {  useNavigate, useParams } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { mensItem, womensItem, kidsItem } from "../../../utils/Data";
import { ProductModel } from "../../../utils/model/product-data-model";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Box,
  Divider,
  HStack,
  Image,
  Spinner,
  Stack,
  Text,
  VStack,
  useColorModeValue,
  useToast,
  Accordion,
  Highlight,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { AppContext, MyContextType } from "../../../context/app-context";

const SingleProductPage = () => {
  const { data, updateList } = useContext<MyContextType>(AppContext);
  const [itemData, setItemData] = useState<ProductModel>();
  const [defaultImg, setDefaultImg] = useState("");
  const [isButLoading, setIsButLoading] = useState<boolean>(false);
  const [isWishlistLoading, setIsWishlistLoading] = useState<boolean>(false);
  const [wishlistbutton, setWishlistbutton] = useState<boolean>(true);
  const [bagbutton, setbagbutton] = useState<boolean>(true);
  const [values, SetValues] = useState<Array<string>>();
  const [sizes, setsizes] = useState<Array<string>>([
    "XXS",
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL",
  ]);
  const { id, page } = useParams();
  const toast = useToast();
  const color = useColorModeValue("black", "white");
  const buttonBgColor = useColorModeValue("red.500", "#2a9df4");
  const buttonBgColorHover = useColorModeValue("#c92e2e", "#0686e7");
  const buttonColor = useColorModeValue("white", "black");
  const Navigate=useNavigate();

  const handleClick = (value: string) => {
    if (value == "Cart") {
      setIsButLoading(true);

      if (itemData != undefined) {
        updateList(itemData,"Wishlist");
      }

      // console.log(data.cartData)
    } else {
      setIsWishlistLoading(true);
      if (itemData != undefined) {
        updateList(itemData,"Cart");
      }
      //setData({...data.cartData , wishList: [ ...data.wishList, itemData]})
      // console.log(data.wishList)
    }
    setTimeout(() => {
      toast({
        title: `Added To ${value}.`,

        description: "shop more or go to cart.",

        duration: 3000,
        isClosable: true,
      });

      value == "Cart" ? setIsButLoading(false) : setIsWishlistLoading(false);
      // handleCart(data[0]);
      value == "Cart" ? setbagbutton(false) : setWishlistbutton(false);

      // console.log(data[0]);
    }, 1);
  };
    
  
  const checkIsCart = ()=>{
    console.log()
  }
  checkIsCart()

  useEffect(() => {
    // console.log(data.cartData)
    // console.log(data.wishList)
 

    window.scrollTo(0, 0);
    if (page === "kid") {
      setsizes([
        "2-3Y",
        "3-4Y",
        "4-5Y",
        "5-6Y",
        "6-7Y",
        "7-8Y",
        "8-9Y",
        "9-10Y",
      ]);
    }
    let productData = [...mensItem, ...womensItem, ...kidsItem].find(
      (el: any) => el.id == id
    );

    if (productData) {
      setItemData(productData);
      setDefaultImg(productData?.Display_image);
      console.log(productData.sizes[0].length);

      SetValues(productData.price.split(" "));
    }
  }, []);
  

  

  return (
    <Stack
      w="full"
      marginY="auto"
      alignSelf="center"
      justifyContent="center"
      direction={{ base: "column", md: "row" }}
      spacing={{ base: 0, sm: 30 }}
      padding={5}
      justify="center"
    >
      {itemData && (
        <>
          <Stack
            flexDirection={{
              base: "column-reverse",
              md: "column-reverse",
              lg: "row",
            }}
            spacing={5}
            padding={5}
            paddingX={{ md: 2, lg: 5 }}
            gap={{ md: 5, lg: 0 }}
            maxW={{ md: "280px", lg: "none" }}
          >
            <Stack
              direction={{ base: "row", md: "row", lg: "column" }}
              padding={3}
              pl={0}
            >
              {itemData?.moreImage.map((img: string, idx: number) => (
                <Image
                  key={idx}
                  borderRadius={5}
                  alt={itemData.name}
                  maxW={"70"}
                  minW="50px"
                  objectFit="cover"
                  src={img}
                  onClick={() => setDefaultImg(img)}
                  cursor="pointer"
                />
              ))}
            </Stack>

            <Stack>
              <Image
                borderRadius={15}
                src={defaultImg}
                maxH={{ md: "320px", lg: "420px" }}
                minW="200px"
                maxW={{ md: "280px", lg: "none" }}
              />
            </Stack>
          </Stack>

          <VStack
            w={{ base: "full", md: "50%" }}
            h={{ base: "full" }}
            paddingX={{ base: 5, md: 0, lg: 8 }}
            paddingTop={{ md: 4 }}
            align="revert-layer"
            spacing={{ md: 3, lg: 5 }}
          >
            <Stack m={0} p={0} gap={0}>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                color={color}
              >
                {itemData.name}
              </Text>

              <Text fontSize={{ base: "10px", md: "15px" }} color="grey.500">
                {itemData.Category}
              </Text>
            </Stack>
            <Divider color="darkgrey" border="1px solid" width="90%" />
            <Stack>
              {values && (
                <HStack alignContent="center">
                  <Text fontWeight="bold" fontSize={{ base: "2xl", md: "3xl" }}>
                    ₹{values[0]}
                  </Text>

                  {values[1] && (
                    <Stack flexDirection="row">
                      <Text textDecoration="line-through">{`₹ ${values[1]}`}</Text>
                      <Text color="red.800">{values[2]} OFF</Text>
                    </Stack>
                  )}
                </HStack>
              )}
              <Text>inclusive of all taxes</Text>
            </Stack>

            <Text fontWeight="extrabold">SELECT SIZE</Text>

            <HStack spacing={5} flexWrap="wrap">
              {sizes.map((el, idx) => (
                <Stack key={idx} p={0}>
                  <Button
                    w={{ base: "40px", lg: "50px" }}
                    // h={{ base: "40px", lg: "50px" }}

                    fontSize={{ base: "10px", lg: "15px" }}
                    variant="outline"
                    border="1px solid"
                    _hover={{ bgColor: "none" }}
                    // color={itemData.sizes.includes(el) ? "blue" : "black"}
                    cursor={itemData.sizes.includes(el) ? "pointer" : "no-drop"}
                    size="xs"
                    px={3}
                    borderRadius={12}
                    position="relative"
                    overflow="hidden"
                    color={itemData.sizes.includes(el) ? { color } : "grey"}
                  >
                    <Divider
                      transform="rotate(165deg)"
                      border="1px solid rgb(255, 0, 0)"
                      width={{ base: "40px", lg: "50px" }}
                      display={itemData.sizes.includes(el) ? "none" : "inline"}
                      position="absolute"
                      top="44%"
                      left="-10%"
                    />
                    {el}
                  </Button>
                </Stack>
              ))}
            </HStack>

            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <b>Product Details</b>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <b>Material & Care:</b>
                  <Text>100% Cotton</Text>
                  <Text>Machine Wash</Text>
                  <br />
                  <b>Country of Origin:</b>
                  <span> India (and proud)</span>
                  <br />
                  <br />
                  <b>Manufactured & Sold By:</b>
                  <Text>The Souled Store Pvt. Ltd.</Text>
                  <Text>224, Tantia Jogani Industrial Premises</Text>
                  <Text>J.R. Boricha Marg</Text>
                  <Text>Lower Parel (E)</Text>
                  <Text>Mumbai - 11</Text>
                  <u>connect@thesouledstore.com</u>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <b>Product Description</b>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text> {`Shop for latest ${itemData.Category}  Online`}</Text>
                  <br />
                  <Text>MRP: Rs. 999/- incl. of all taxes.</Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <HStack
              w="full"
              justify={{ base: "center", md: "flex-start", lg: "flex-start" }}
            >
          {(data?.cartData?.indexOf(itemData) !== -1) ?
            <Button
                onClick={() => Navigate("/cart")}
                fontSize="md"
                padding={4}
                _hover={{ bgColor: { buttonBgColorHover } }}
                // bgColor={buttonBgColor}
                colorScheme="teal"
                variant='outline'
                borderRadius="none"
                w={{ base: "50%", md: "65%" }}
              >
                

                Go to Cart
              </Button>
          :<Button
                onClick={() => handleClick("Cart")}
                fontSize="md"
                padding={4}
                _hover={{ bgColor: { buttonBgColorHover } }}
                bgColor={buttonBgColor}
                color={buttonColor}
                borderRadius="none"
                w={{ base: "50%", md: "65%" }}
              >
                <BiShoppingBag
                  fontSize={{ base: "25px", sm: "25px", md: "md" }}
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
              </Button>}

              <Button
                onClick={() => handleClick("Wishlist")}
                fontSize="md"
                padding={4}
                borderRadius="none"
                colorScheme="teal"
                w={{ base: "50%", md: "25%" }}
              >
                <AiOutlineHeart
                  fontSize={{ base: "25px", sm: "25px", md: "md" }}
                />
                {!isWishlistLoading && wishlistbutton && "Wishlist"}
                {!isWishlistLoading && !wishlistbutton && "ADDED"}

                {isWishlistLoading && (
                  <Spinner
                    thickness="4px"
                    speed="0.55s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="lg"
                  />
                )}
              </Button>
            </HStack>
          </VStack>
        </>
      )}
    </Stack>
  );
};

export default SingleProductPage;
