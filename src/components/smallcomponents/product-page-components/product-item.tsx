import {
  Circle,
  Divider,
  Image,
  Stack,
  Tag,
  TagLabel,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";

import { useState, useContext, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { ProductModel } from "../../../utils/model/product-data-model";
import { Link } from "react-router-dom";
import { AppContext, MyContextType } from "../../../context/app-context";

const ProductItem = (data: { data: ProductModel; name: string }) => {
  const { updateList } = useContext<MyContextType>(AppContext);
  const [image, setImage] = useState(data?.data?.Display_image);
  const [isSmallScreen, setIsSmallScreen] = useState<number>(0);
  const wishListColor = useColorModeValue("red", "#0e4482");
  const [wishlist, setWishlist] = useState(true);

  let str = "";
  const SizesValue = () => {
    {
      data.data.sizes.map((el: string) => {
        str += " ";
        str += el;
      });
    }
  };

  SizesValue();

  const textComponent = () => {
    console.log(isSmallScreen > 425 && isSmallScreen < 1024);
    return isSmallScreen < 425 ? (
      <Text fontSize="11px" pl={2}>
        {data.data.name}
      </Text>
    ) : isSmallScreen > 425 && isSmallScreen < 1024 ? (
      <Text fontSize="sm" pl={2}>
        {shortenText(data.data.name, 23)}
      </Text>
    ) : (
      <Text fontSize="sm" pl={2}>
        {data.data.name}
      </Text>
    );
  };

  const categoryComponent = () => {
    return isSmallScreen < 425 ? (
      <Text fontSize={{ base: "12px", md: "md" }} pl={2} color="#737577">
        {data.data.Category}
      </Text>
    ) : isSmallScreen > 425 && isSmallScreen < 1024 ? (
      <Text fontSize="sm" pl={2} color="#737577">
        {shortenText(data.data.Category, 14)}
      </Text>
    ) : (
      <Text fontSize="13px" pl={2} color="#737577">
        {shortenText(data.data.Category, 19)}
      </Text>
    );
  };

  function shortenText(text: string, limit: number) {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    }
    return text;
  }

  const HandlingHover = () => {
    setImage(data.data.hover_Image);
  };

  const HandlingMouseRemove = () => {
    setImage(data.data.Display_image);
  };

  const HandlingClick = () => {
    updateList(data?.data, "Wishlist");

    setWishlist(!wishlist);
    console.log(wishlist);
  };

  const value = data?.data?.price.split(" ");

  useEffect(() => {
    setImage(data?.data?.Display_image);
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [data]);

  return (
    <Stack
      width={{ base: "100%", md: "95%" }}
      border={{ base: "1px solid white", md: "none" }}
      h="100%"
      position="relative"
    >
      <Circle
        border="2px solid"
        position="absolute"
        cursor="context-menu"
        right="5%"
        top="4%"
        size="30px"
        style={{
          backgroundColor: wishlist ? "white" : "white",
          color: wishlist ? wishListColor : "teal",
        }}
        opacity="0.8"
        onClick={HandlingClick}
        zIndex="2"
        dropShadow="2xl"
      >
        <FaRegHeart />
      </Circle>

      <Link to={`/${data?.name}/product/${data?.data?.id}`}>
        <Stack
          fontSize="sm"
          fontWeight="500"
          gap={0.5}
          p={{ base: 0, md: 0.5 }}
          cursor="pointer"
          position="relative"
        >
          <Image
            src={image}
            onMouseEnter={HandlingHover}
            onMouseLeave={HandlingMouseRemove}
            _hover={{ animation: "3s linear slidein, 3s ease-out 5s slideout" }}
          />
          {textComponent()}

          <Divider bg="#737577" variant="solid" height="1px" width="97%" />
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            mr={{ base: "none", md: "5px" }}
          >
            {categoryComponent()}
            <Tag size="sm" variant="subtle" colorScheme="red">
              <Tooltip label={str} placement="top">
                <TagLabel>Sizes</TagLabel>
              </Tooltip>
            </Tag>
          </Stack>

          <Stack flexDirection="row">
            <Text fontSize={{ base: "11px", md: "sm" }} pl={2} color="#737577">
              ₹ {+value[0]}
            </Text>
            {+value[1] && (
              <Stack flexDirection="row">
                <Text
                  fontSize={{ base: "11px", md: "sm" }}
                  textDecoration="line-through"
                >
                  ₹ {value[1]}
                </Text>{" "}
                <Text fontSize={{ base: "11px", md: "sm" }} color="red.800">
                  {value[2]} OFF
                </Text>{" "}
              </Stack>
            )}
          </Stack>
        </Stack>
      </Link>
    </Stack>
  );
};

export default ProductItem;
