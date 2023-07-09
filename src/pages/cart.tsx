import {
  VStack,
  Text,
  HStack,
  Divider,
  Image,
  Button,
  Grid,
  GridItem,
  Stack,
  FormControl,
  FormLabel,
  Select,
  Box,
  useColorModeValue,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Accordion,
  AccordionItem,
} from "@chakra-ui/react";
import { useState } from "react";
import StepperFunc from "../components/smallcomponents/Stepper";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const Navigator = useNavigate();
  const ButtonColor = useColorModeValue("red.500", "#2a9df4");
  return (
    <>
      {false ? (
        <EmptyCart />
      ) : (
        <VStack marginX="auto" my={5} w="100%" h="100%" align="center">
          <HStack w="100%" justify="center">
            <StepperFunc />
          </HStack>
          <HStack w="100%" justify="center">
            <Divider orientation="horizontal" />
          </HStack>
          <br />
          <Stack
            w="100%"
            flexDirection={{ base: "column", md: "row", lg: "row" }}
            margin="auto"
          >
            <Box
              w={{ base: "100%", md: "100%", lg: "63%" }}
              borderWidth="1px"
              gap={2}
              p={3}
              maxW={{ base: "100%", md: "800px", lg: "800px" }}
              margin="auto"
            >
              <Stack w="100%" flexDirection="row">
                <Stack w={{ base: "35%", md: "20%", lg: "20%" }} p={3} pb={0}>
                  <Image
                    borderRadius={{ base: "7px", md: "10px", lg: "10px" }}
                    src="\img\Mens\Mens-Productpage-Img's\1.1.png"
                  />
                </Stack>

                <Stack
                  w={{ base: "65%", md: "80%", lg: "80%" }}
                  position="relative"
                  flexDirection={{ base: "column", md: "row", lg: "row" }}
                  p={3}
                >
                  <Stack w={{ base: "fit-content", md: "50%", lg: "50%" }}>
                    <Text>TSS Originals: Cutting Chai</Text>
                    <Text>Oversized T-Shirts</Text>
                    <Stack flexDirection="row">
                      <FormControl>
                        <Select
                          placeholder="Select sizes"
                          height={{ base: "30px", md: "10px", lg: "35px" }}
                          fontSize={{ base: "12px" }}
                        >
                          {[
                            "XXS",
                            "XS",
                            "S",
                            "M",
                            "L",
                            "XL",
                            "XXL",
                            "XXXL",
                          ].map((el: string, idx: number) => {
                            return (
                              <option key={idx} value={el}>
                                {el}
                              </option>
                            );
                          })}
                        </Select>
                      </FormControl>

                      <FormControl>
                        <Select
                          placeholder="Qty:1"
                          height={{ base: "30px", md: "10px", lg: "35px" }}
                          fontSize={{ base: "12px" }}
                        >
                          {[
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                            "6",
                            "7",
                            "8",
                            "9",
                            "10",
                          ].map((el: string, idx: number) => {
                            return (
                              <option key={idx} value={el}>
                                {el}
                              </option>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </Stack>
                  </Stack>
                  <Stack
                    w={{ base: "fit-content", md: "50%", lg: "50%" }}
                    align="flex-end"
                  >
                    <Text>$999</Text>
                  </Stack>
                  <Divider
                    w="100%"
                    top="100%"
                    left="0%"
                    position="absolute"
                    display={{ base: "none", md: "inline", lg: "inline" }}
                  />
                </Stack>
              </Stack>

              <Stack
                w="100%"
                flexDirection="row"
                justifyContent={{
                  base: "center",
                  md: "flex-end",
                  lg: "flex-end",
                }}
                mt="10px"
              >
                <Button variant="outline">REMOVE</Button>
                <Button variant="outline">MOVE TO WISHLIST</Button>
              </Stack>
            </Box>

            <Stack w={{ base: "100%", md: "100%", lg: "25%" }} margin="auto">
              <Button colorScheme="teal" variant="solid">
                Place Order
              </Button>
              <Box borderWidth="1px">
                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Section 1 title
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Section 2 title
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </Stack>
          </Stack>
        </VStack>
      )}
    </>
  );
};

const EmptyCart = () => {
  const Navigator = useNavigate();
  return (
    <VStack marginX="auto" my={5} w="100%" align="center">
      <HStack w="100%" justify="center">
        <StepperFunc />
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
  );
};

export default Cart;
