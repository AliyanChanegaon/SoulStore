import {
  Box,
  Button,
  Divider,
  FormControl,
  Image,
  Select,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { useContext, useState } from "react";
import { ProductModel } from "../utils/models/product-data-model";
import { AppContext, MyContextType } from "../context/app-context";
import { ConfirmationDialog } from "./dialog/confirmation-dialog";

const CartItem = (data: { data: ProductModel }) => {
  const { RemoveItem, MoveItem } = useContext<MyContextType>(AppContext);
  const color = useColorModeValue("#58595b", "white");
  const value = data?.data?.price.split(" ");
  const [isDialogOpen, setisDialogOpen] = useState<{ [key: string]: boolean }>({
    cart: false,
    wishlist: false,
  });


  return (
    <Box
      w="100%"
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
            src={data?.data?.Display_image}
          />
        </Stack>

        <Stack
          w={{ base: "65%", md: "80%", lg: "80%" }}
          position="relative"
          flexDirection={{ base: "column", md: "row", lg: "row" }}
          p={3}
        >
          <Stack w={{ base: "fit-content", md: "50%", lg: "50%" }}>
            <Text fontWeight="bold" color={color}>
              {data?.data?.name}
            </Text>
            <Text fontSize="sm">{data?.data?.Category}</Text>
            <Stack flexDirection="row">
              <FormControl>
                <Select
                  placeholder="Select sizes"
                  height={{ base: "30px", md: "10px", lg: "35px" }}
                  fontSize={{ base: "12px" }}
                >
                  {["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"].map(
                    (el: string, idx: number) => {
                      return (
                        <option key={idx} value={el}>
                          {el}
                        </option>
                      );
                    }
                  )}
                </Select>
              </FormControl>

              <FormControl>
                <Select
                  placeholder={data?.data?.quantity.toString()}
                  height={{ base: "30px", md: "10px", lg: "35px" }}
                  fontSize={{ base: "12px" }}
                  value={data?.data?.quantity}
                >
                  {["2", "3", "4", "5", "6", "7", "8", "9", "10"].map(
                    (el: string, idx: number) => {
                      return (
                        <option key={idx} value={el}>
                          {el}
                        </option>
                      );
                    }
                  )}
                </Select>
              </FormControl>
            </Stack>
          </Stack>
          <Stack
            w={{ base: "fit-content", md: "50%", lg: "50%" }}
            align="flex-end"
          >
            <Stack flexDirection="row">
              <Text fontWeight="bold">₹ {+value[0]}</Text>
              {+value[1] && (
                <Stack flexDirection="row">
                  <Text textDecoration="line-through">₹ {value[1]}</Text>
                  <Text color="red.800">{value[2]} OFF</Text>{" "}
                </Stack>
              )}
            </Stack>
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
        <Button
          variant="outline"
          onClick={() => setisDialogOpen({ cart: true, wishlist: false })}
        >
          REMOVE
        </Button>
        <Button
          variant="outline"
          onClick={() => setisDialogOpen({ cart: false, wishlist: true })}
        >
          MOVE TO WISHLIST
        </Button>
      </Stack>

      {isDialogOpen.cart && (
        <ConfirmationDialog
          isOpen={isDialogOpen.cart}
          onClose={() => setisDialogOpen({ cart: false, wishlist: false })}
          confirmationMessage={<Text>Remove Item From Cart</Text>}
          messageBodyLines={
            <>
              <Text>Are you sure you want to remove </Text>
              <Text>this product from your Cart ?</Text>
            </>
          }
          img={data?.data?.Display_image}
          type="Cart"
          onYesClick={() => RemoveItem(data?.data?.id, "Cart")}
          
        />
      )}

      {isDialogOpen.wishlist && (
        <ConfirmationDialog
          isOpen={isDialogOpen.wishlist}
          onClose={() => setisDialogOpen({ cart: false, wishlist: false })}
          confirmationMessage={<Text>Move To Wishlist</Text>}
          messageBodyLines={
            <>
              <Text>Are you sure you want to move </Text>
              <Text>this product to your Wishlist ?</Text>
            </>
          }
          img={data?.data?.Display_image}
          type="Cart"
          onYesClick={() => MoveItem(data?.data, "To-Wishlist")}
        />
      )}
    </Box>
  );
};

export default CartItem;
