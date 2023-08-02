import { Box, Button, Divider, Image, Stack, Text, VStack, useDisclosure } from "@chakra-ui/react";
import { ProductModel } from "../utils/models/product-data-model";
import { AppContext, MyContextType } from "../context/app-context";
import { useContext} from "react";
import { ConfirmationDialog } from "./dialog/confirmation-dialog";

const WishlistItem = (data: { data: ProductModel }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
    const { RemoveItem, MoveItem } = useContext<MyContextType>(AppContext);
  const value = data?.data?.price.split(" ");
  return (
    <Box borderWidth="1px">
    <VStack w="100%" align="flex-start" position="relative">
      <Image w="100%" src={data.data.Display_image} />
      <Image cursor="pointer" borderRadius="100%" w={5} h={5} p="2px" position="absolute" right="3%" top="2%" bgColor="whiteAlpha.800" src="\img\close-icon.png" onClick={onOpen}/>
      <Text pl={2} fontSize="sm" fontWeight="bold">{data.data.name}</Text>
      <Divider alignSelf="center" w="90%" />
      <Text pl={2} color="gray.500" fontSize="14px">{data.data.Category}</Text>
      <Stack flexDirection="row">
      <Text pl={2} fontWeight="600" color="#3d3d3d">
        ₹ {+value[0]}
      </Text>
      {+value[1] && (
      <>
          <Text textDecoration="line-through">₹ {value[1]}</Text>{" "}
          <Text color="red.800">{value[2]} OFF</Text>{" "}
          </>
      )}
      </Stack>
      <Button w="100%" colorScheme='teal' variant='ghost' onClick={()=> MoveItem(data.data,"To-Cart")} > Move to Cart</Button>
    </VStack>
    <ConfirmationDialog
          isOpen={isOpen}
          onClose={onClose}
          confirmationMessage={<Text>Remove from wishlist</Text>}
          messageBodyLines={
            <>
              <Text>Are you sure you want to remove </Text>
              <Text>this product from your wishlist ?</Text>
            </>
          }
          img={data?.data?.Display_image}
          type="Cart"
          onYesClick={() => RemoveItem(data?.data?.id,"Wishlist")}
        />
    </Box>
  );
};

export default WishlistItem;
