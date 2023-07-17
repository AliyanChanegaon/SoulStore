import {
  Divider,
  HStack,
  Stack,
  VStack,
  FormControl,
  FormLabel,
  Image,
  Input,
  PinInput,
  PinInputField,
  Text,
} from "@chakra-ui/react";
import StepperFunc from "../components/smallcomponents/Stepper";
import PriceBreakdown from "../components/smallcomponents/price-breakdown";



const PriceData = {
  buttonText: "CONFIRM ORDER",
  path: "payment-successful",
};

const PaymentPage = () => {
  return (
    <VStack marginX="auto" w="100%" maxW="1400px" align="center">
      <HStack w="100%" justify="center">
        <StepperFunc step={3} />
      </HStack>
      <HStack w="100%" justify="center">
        <Divider orientation="horizontal" />
      </HStack>
      <br />
      <Stack
        w="100%"
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        margin="auto"
        align={{base: "center"}}
      >
        <Stack align="center" my={5} w={{ base: "80%", md: "100%", lg: "63%" }}>
          <Text fontWeight="bold" fontSize="xl">
            Choose your payment method
          </Text>

          <Stack direction={{ base: "column", md: "row" }} spacing={5}>
            <VStack align="flex-start" padding={5} bg="#eeeeee">
              <HStack>
                <Image
                  w={25}
                  src="https://images.bewakoof.com/web/bank-card-fill-1645697857.svg"
                />
                <Text>Debit/Credit Card</Text>
              </HStack>

              <Divider />

              <HStack>
                <Image
                  w={25}
                  src="https://images.bewakoof.com/web/Group-1645705428.png"
                />
                <Text>WALLET</Text>
              </HStack>

              <Divider />
              <HStack>
                <Image
                  w={25}
                  src="https://images.bewakoof.com/web/upi-icon-1645705429.png"
                />
                <Text>UPI</Text>
              </HStack>

              <Divider />
              <HStack>
                <Image
                  w={25}
                  src="https://images.bewakoof.com/web/nb-icon-1645705428.png"
                />
                <Text>NET BANKING</Text>
              </HStack>

              <Divider />
              <HStack>
                <Image
                  w={25}
                  src="https://images.bewakoof.com/web/cod-icon-1645705427.png"
                />
                <Text>CASH ON DELIVERY</Text>
              </HStack>

              <Divider />
            </VStack>

            <VStack align="flex-start" spacing={5} padding={5}>
              <VStack>
                <HStack>
                  <FormControl>
                    <FormLabel>First Name</FormLabel>
                    <Input size="sm" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Last Name</FormLabel>
                    <Input size="sm" />
                  </FormControl>
                </HStack>

                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Input size="sm" />
                </FormControl>

                <HStack>
                  <FormControl>
                    <FormLabel>City</FormLabel>
                    <Input size="sm" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>State</FormLabel>
                    <Input type="city" size="sm" />
                  </FormControl>
                </HStack>
              </VStack>

              <Divider />

              <VStack>
                <HStack width="full">
                  <FormControl>
                    <FormLabel>Card Number</FormLabel>
                    <Input size="sm" />
                  </FormControl>

                  <FormControl>
                    <FormLabel>CVV</FormLabel>
                    <HStack width="full">
                      <PinInput size="sm">
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                      </PinInput>
                    </HStack>
                  </FormControl>
                </HStack>

                <HStack>
                  <FormControl>
                    <FormLabel>Exp Month</FormLabel>
                    <Input size="sm" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Exp Year</FormLabel>
                    <Input size="sm" />
                  </FormControl>
                </HStack>
              </VStack>
            </VStack>
          </Stack>
        </Stack>
        <Stack
          w={{ base: "100%", md: "100%", lg: "25%" }}
          justifyContent="flex-start"
          align={{base: "center"}}
          mb={{base: "20px"}}
        >
          <PriceBreakdown data={PriceData} />
        </Stack>
      </Stack>
    </VStack>
  );
};

export default PaymentPage;
