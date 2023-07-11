import { Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/react";
import { EmptyCart } from "../components/empty-cart&wishlist";
import { AppContext, MyContextType } from "../context/app-context";

import { useContext } from "react";
import WishlistItem from "../components/wishlist-item";

const Wishlist = () => {
  const { data } = useContext<MyContextType>(AppContext);
    console.log(data.wishList);
  return (
    <>
      {data.wishList?.length === 0 ? (
        <EmptyCart type="Wishlist" />
      ) : (
       <VStack w="100%" maxW="1000px" margin="auto"  >
        <HStack w="100%" mt={8}  flexDirection="row" justifyContent="flex-start" >
        <Text fontWeight="bold">My Wishlist</Text>
        <Text>{`(${data.wishList?.length} items)`}</Text>
        </HStack>
          <Grid mt={8} mb={8} templateColumns={{base:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(4,1fr)"}} gap={{base:0,md:5,lg:7}}>
            {data.wishList?.map((el,idx)=>(
              <GridItem key={idx} w="100%">
                <WishlistItem data={el}/>
              </GridItem>
            ))}
          </Grid>
       </VStack>
      )}
    </>
  );
};

export default Wishlist;
