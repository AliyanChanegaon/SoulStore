import {
  Circle,
  Divider,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";

import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { ProductModel } from "../../../utils/model/product-data-model";
import { Link } from "react-router-dom";

const ProductItem = (data: { data: ProductModel , name: string}) => {
 
  const [image, setImage] = useState(data?.data?.Display_image);
  const [wishlist, setWishlist] = useState(true);
  const toast = useToast();

  const HandlingHover = () => {
    setImage(data.data.hover_Image);
  };

  const HandlingMouseRemove = () => {
    setImage(data.data.Display_image);
  };

  const addToWishlist = (value:ProductModel) => {
    setWishlist(!wishlist);

    wishlist
      ? toast({
          title: "Wishlist",
          description: "Checkout your wishlist",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      : toast({
          title: "Wishlist",
          description: "Item Removed from wishlist",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
  };

  const wishlistStyle = {
    bgColor: wishlist ? "white" : "white",
    color: wishlist ? "white" : "teal",
  };

  const value = data?.data?.price.split(" ");
  return (
    <Link to={`/${data?.name}/product/${data?.data?.id}`}>
    <Stack
      fontSize="sm"
      fontWeight="500"
      gap={0.5}
      p={0.5}
      width="95%"
      cursor="pointer"
      position="relative"
      h="100%"
    
    >
      <Circle
        border="2px solid"
        position="absolute"
        right="5%"
        top="4%"
        size="30px"
        style={wishlistStyle}
        opacity="0.8"
        onClick={() => {
          addToWishlist(data.data);
        }}
      >
        <FaRegHeart />
      </Circle>
      <Image
        src={image}
        onMouseEnter={HandlingHover}
        onMouseLeave={HandlingMouseRemove}
        _hover={{ animation: "3s linear slidein, 3s ease-out 5s slideout" }}
      />
      <Text pl={2}>{data.data.name}</Text>
      <Divider bg="#737577" variant="solid" height="1px" width="97%" />
      <Text pl={2} color="#737577">
        {data.data.Category}
      </Text>
      <Stack flexDirection="row">
        <Text pl={2} color="#737577">
          ₹ {+value[0]}
        </Text>
        {+value[1] && (
          <Stack flexDirection="row">
            <Text textDecoration="line-through">₹ {value[1]}</Text>{" "}
            <Text color="red.800">{value[2]} OFF</Text>{" "}
          </Stack>
        )}
      </Stack>
    </Stack>
    </Link>
  );
};

export default ProductItem;
