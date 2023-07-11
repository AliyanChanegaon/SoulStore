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
  Input,
  Spacer,
  Checkbox,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
  Tfoot,
  Th,
} from "@chakra-ui/react";
import { useState,useContext } from "react";
import StepperFunc from "../components/smallcomponents/Stepper";
import { Link, useNavigate } from "react-router-dom";
import { CartList } from "../components/cart-list";
import { AppContext, MyContextType } from "../context/app-context";
import { EmptyCart } from "../components/empty-cart&wishlist";

const Cart = () => {
  const { data } = useContext<MyContextType>(AppContext);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const Navigator = useNavigate();
  const ButtonColor = useColorModeValue("red.500", "#2a9df4");
  const InputBgColor = useColorModeValue("white", "#1a202c");
  console.log(data)
  return (
    <>
      {data.cartData?.length===0 ? (
         <EmptyCart type="Cart" />
      ) : (
        <VStack marginX="auto" my={5} w="100%" maxW="1400px" align="center">
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
          ><Stack  w={{ base: "100%", md: "100%", lg: "63%" }}>
               <CartList data={data.cartData}/>
          </Stack>
          

            <Stack w={{ base: "100%", md: "100%", lg: "25%" }}  justifyContent="flex-start">
             
              <Box borderWidth="1px">
                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <Stack flexDirection="row">
                            <Image mt="1px" h={5} w={5} src="\img\Coupon.png" />
                            <Text
                              fontWeight="bold"
                              fontSize={{ md: "md", lg: "sm" }}
                            >
                              Apply Coupon
                            </Text>
                          </Stack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel w="100%" pb={4}>
                      <Box
                        borderWidth="1px"
                        p={2}
                        borderRadius={9}
                        justifyContent="space-between"
                        maxW="100%"
                      >
                        <input
                          style={{
                            width: "80%",
                            border: "none",
                            outline: "none",
                            backgroundColor: InputBgColor,
                          }}
                          type="number"
                          placeholder="Enter Coupon Code"
                        />
                        <button style={{ color: "teal", fontWeight: "600" }}>
                          APPLY
                        </button>
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <Stack flexDirection="row">
                            <Image mt="1px" h={5} w={5} src="\img\Coupon.png" />
                            <Text
                              fontWeight="bold"
                              fontSize={{ md: "md", lg: "sm" }}
                            >
                              Gift Voucher
                            </Text>
                          </Stack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel w="100%" pb={4}>
                      <Box
                        borderWidth="1px"
                        p={2}
                        borderRadius={9}
                        justifyContent="space-between"
                        maxW="100%"
                      >
                        <input
                          style={{
                            width: "80%",
                            border: "none",
                            outline: "none",
                            backgroundColor: InputBgColor,
                          }}
                          type="number"
                          placeholder="Enter Voucher Code"
                        />
                        <button style={{ color: "teal", fontWeight: "600" }}>
                          APPLY
                        </button>
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Stack flexDirection="row" px={4} py={2}>
                  <Image mt="1px" h={5} w={5} src="\img\gift.png" />
                  <Text fontWeight="bold" fontSize={{ md: "md", lg: "sm" }}>
                    Gift Wrap (₹ 25)
                  </Text>
                  <Spacer />
                  <Checkbox colorScheme="teal" />
                </Stack>
              </Box>
              <Text m={3}>BILLING DETAILS</Text>
              <TableContainer>
                <Table variant="simple">
                  <Tbody>
                    <Tr>
                      <Td>Cart Total</Td>

                      <Td isNumeric>₹ 5394.29</Td>
                    </Tr>
                    <Tr>
                      <Td color="teal">Discount</Td>

                      <Td color="teal" isNumeric>-₹ 150.48</Td>
                    </Tr>
                    <Tr>
                      <Td>GST</Td>

                      <Td isNumeric>₹ 262.19</Td>
                    </Tr>
                    <Tr>
                      <Td>Shipping Charges</Td>

                      <Td isNumeric>₹ 0</Td>
                    </Tr>
                  </Tbody>
                  <Tfoot>
                    <Tr >
                      <Th color="#DE1B1E">Total Amount</Th>

                      <Th color="#DE1B1E" isNumeric>₹ 5506.00</Th>
                    </Tr>
                  </Tfoot>
                </Table>
              </TableContainer>
              <Button colorScheme="teal" variant="solid">
                Place Order
              </Button>
            </Stack>
          </Stack>
        </VStack>
      )}
    </>
  );
};



export default Cart;



