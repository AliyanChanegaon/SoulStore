import { Button, Divider, HStack, Highlight, Image, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import StepperFunc from "./smallcomponents/Stepper";

export const EmptyCart = (type: { type: string }) => {
  console.log(type);
  const bgColor = useColorModeValue("red.500", "#2a9df4");
  const Navigator = useNavigate();
  return (
    <>
      {type.type === "Cart" ? (
        <VStack marginX="auto" my={5} w="100%" align="center">
          <HStack w="100%" justify="center">
            <StepperFunc  step={0}  />
          </HStack>
          <HStack w="100%" justify="center">
            <Divider orientation="horizontal" />
          </HStack>

          <Image w={{ base: "90px", lg: "150px" }} src="\img\Cart.png" />
          <b>Your shopping cart is empty.</b>
          <Text>Please add something soon, carts have feelings too.</Text>
          <br />
          <b style={{ fontSize: "14px" }}>Popular Categories</b>
          <HStack gap={2}>
            <Link to={"/mens-product"}>
              <Text
                cursor="pointer"
                fontSize={{ base: "sm" }}
                p={1}
                border="1px solid #d8d8d8"
              >
                Men's Shopping
              </Text>
            </Link>
            <Link to={"/womens-product"}>
              <Text
                cursor="pointer"
                fontSize={{ base: "sm" }}
                p={1}
                border="1px solid #d8d8d8"
              >
                Women's Shopping
              </Text>
            </Link>
            <Link to={"/kids-product"}>
              <Text
                cursor="pointer"
                fontSize={{ base: "sm" }}
                p={1}
                border="1px solid #d8d8d8"
              >
                Kid's Shopping
              </Text>
            </Link>
          </HStack>
          <HStack marginX="auto" w={{ base: "100%" }} justify="center">
            <Button
              fontSize="13px"
              fontWeight="bold"
              w={{ base: "45%", md: "25%", lg: "150px" }}
              variant="outline"
              colorScheme="teal"
              onClick={() => {
                Navigator("/men");
              }}
            >
              CONTINUE SHOPPING
            </Button>
            <Button
              fontSize="15px"
              w={{ base: "45%", md: "25%", lg: "130px" }}
              variant="solid"
              colorScheme="teal"
              onClick={() => {
                Navigator("/login");
              }}
            >
              LOGIN
            </Button>
          </HStack>
        </VStack>
      ) : (
        <VStack marginX="auto" my={5} w="100%" align="center">
          

          <Image my={5} w={{ base: "150px", lg: "280px" }} src="\img\Wishlist.png" />
          <b>Your wishlist is lonely and looking for love.</b>
          <Text>Add products to your wishlist, review them anytime and easily move to cart.</Text>
          <br />
         
        
          <HStack marginX="auto" w={{ base: "100%" }} justify="center">
            <Button
              fontSize="13px"
              fontWeight="bold"
              w={{ base: "45%", md: "25%", lg: "150px" }}
              variant="outline"
              colorScheme="teal"
              onClick={() => {
                Navigator("/men");
              }}
            >
              CONTINUE SHOPPING
            </Button>
            <Button
              fontSize="15px"
              w={{ base: "45%", md: "25%", lg: "130px" }}
              variant="solid"
              colorScheme="teal"
              onClick={() => {
                Navigator("/login");
              }}
            >
              LOGIN
            </Button>
          </HStack>
          <VStack marginTop={7} gap={4} w="100%">
        <Text
          color="whiteAlpha.900"
          bgColor={bgColor}
          w="100%"
          align="center"
          fontSize="1.4em"
          fontWeight="500"
          letterSpacing={{base:"none",lg:"1.5px"}}
          line-height="1.1"
        >
          HOMEGROWN INDIAN BRAND
        </Text>
        <Text align="center" fontSize={{base:"1.2em",md:"1.5em",lg:"1.6em"}} fontWeight="400">
          <Highlight query="6 Million" styles={{ color:bgColor, py: "1", fontWeight: "700" }}>
            Over 6 Million Happy Customers
          </Highlight>
        </Text>
      </VStack>
        </VStack>
      )}
    </>
  );
};
