import { Button, Image, Stack, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"


const OrderConfirmPage = () => {
  return (
    <VStack w="50%" align="center" mb={10}>
        <Image src="\img\payment-successful.png"/>
        <Stack  w="100%">
        <Link  to={"/men"}>
        <Button w="100%" colorScheme="teal">CONTINUE SHOPPING</Button>
        </Link>
        </Stack>

    </VStack>
  )
}

export default OrderConfirmPage