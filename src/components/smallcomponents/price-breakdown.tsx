import {
  Accordion,
  Text,
  Button,
  AccordionButton,
  AccordionItem,
  Box,
  Stack,
  Image,
  Spacer,
  Checkbox,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
  AccordionIcon,
  AccordionPanel,
  useColorModeValue,
  Th,
  Tfoot,
} from "@chakra-ui/react";
import { useContext, useMemo, useState } from "react";

import { Link } from "react-router-dom";
import { AppContext, MyContextType } from "../../context/app-context";

interface PriceBreakdownProps {
  data: {
    buttonText: string;
    path: string;
  };
}

const PriceBreakdown: React.FC<PriceBreakdownProps> = ({ data }) => {
  const { data: Payment } = useContext<MyContextType>(AppContext);


  let total = 0;
  let discount = 0
  useMemo(() => {
    
    HandlingTotal();

   
  }, [Payment]);

  function HandlingTotal() {
    Payment.cartData.map((el) => {
      console.log(el.price)
      const value = el.price.split(" ");
      total += Number(value[0]);
      discount += Number(value[1]) - Number(value[0]);
    });
    
  }

  const InputBgColor = useColorModeValue("white", "#1a202c");
  return (
    <>
      {data.path == "address" && (
        <Box borderWidth="1px">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Stack flexDirection="row">
                      <Image mt="1px" h={5} w={5} src="\img\Coupon.png" />
                      <Text fontWeight="bold" fontSize={{ md: "md", lg: "sm" }}>
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
                      <Text fontWeight="bold" fontSize={{ md: "md", lg: "sm" }}>
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
      )}
      <Text m={3}>BILLING DETAILS</Text>
      <TableContainer>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>Cart Total</Td>

              <Td isNumeric>₹ {((total - 50) / 1.12).toFixed(2)}</Td>
            </Tr>
            <Tr>
              <Td color="teal">Discount</Td>

              <Td color="teal" isNumeric >
              ₹ {discount}
              </Td>
            </Tr>
            <Tr>
              <Td>GST</Td>

              <Td isNumeric>₹ 262.19</Td>
            </Tr>
            <Tr>
              <Td>Shipping Charges</Td>

              <Td isNumeric>₹50</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th color="#DE1B1E">Total Amount</Th>

              <Th color="#DE1B1E" isNumeric>
                ₹{total}
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Link to={`/${data.path}`}>
        <Button w="100%" colorScheme="teal" variant="solid">
          {data.buttonText}
        </Button>
      </Link>
    </>
  );
};

export default PriceBreakdown;
