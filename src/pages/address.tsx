import { Divider, HStack, Stack, VStack } from "@chakra-ui/react"
import StepperFunc from "../components/smallcomponents/Stepper"
import PriceBreakdown from "../components/smallcomponents/price-breakdown"



const PriceData={
  buttonText:"CONTINUE TO PAYMENT",
  path:"payment"
}

const Address = () => {
  return (
    <VStack marginX="auto" my={5} w="100%" maxW="1400px" align="center">
        <HStack w="100%" justify="center">
            <StepperFunc step={2}/>
          </HStack>
          <HStack w="100%" justify="center">
            <Divider orientation="horizontal" />
          </HStack>
          <br />
          <Stack
            w="100%"
            flexDirection={{ base: "column", md: "row", lg: "row" }}
            margin="auto">
                <Stack  w={{ base: "100%", md: "100%", lg: "63%" }}>

                </Stack>
                <Stack w={{ base: "100%", md: "100%", lg: "25%" }}  justifyContent="flex-start">
            <PriceBreakdown data={PriceData} />
             
            </Stack>

          </Stack>
    </VStack>
  )
}

export default Address