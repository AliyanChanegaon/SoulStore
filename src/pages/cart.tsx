import {
  VStack,
  HStack,
  Divider,
  Stack,
} from "@chakra-ui/react";
import {useContext } from "react";
import StepperFunc from "../components/smallcomponents/Stepper";
import { CartList } from "../components/cart-list";
import { AppContext, MyContextType } from "../context/app-context";
import { EmptyCart } from "../components/empty-cart&wishlist";
import PriceBreakdown from "../components/smallcomponents/price-breakdown";


const PriceData={
  buttonText:"PROCEED",
  path:"address"
}


const Cart = () => {
  const { data } = useContext<MyContextType>(AppContext);
  

  return (
    <>
      {data.cartData?.length===0 ? (
         <EmptyCart type="Cart" />
      ) : (
        <VStack marginX="auto" my={5} w="100%" maxW="1400px" align="center">
          <HStack w="100%" justify="center">
            <StepperFunc step={1}/>
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
            <PriceBreakdown data={PriceData} />
             
            </Stack>
          </Stack>
        </VStack>
      )}
    </>
  );
};



export default Cart;



