import { Divider, Grid, GridItem, Image, Stack, Text } from "@chakra-ui/react";
import AliceCarousel from "react-alice-carousel";

interface dataitemProp {
  img: string;
  name: string;
  type: string;
  price: string;
}

interface dataProp {
  data: dataitemProp[];
}

const topSellerResponsive = {
  0: { items: 2 },
  568: { items: 3 },
  1024: { items: 4 },
};
const TopSeller = (data: dataProp) => {
  const myData = data?.data?.map((el: dataitemProp, idx: number) => {
    const value = el.price.split(" ");
   
    return (
      <Stack
        fontSize="50%"
        fontWeight="500"
        gap={0.5}
        p={0.5}
        key={idx}
        width="95%"
        cursor="pointer"
      >
        <Image src={el.img} />
        <Text pl={2}>{el.name}</Text>
        <Divider bg="#737577" variant="solid" height="1px" width="97%" />
        <Text pl={2} color="#737577">
          {el.type}
        </Text>
        <Stack flexDirection="row">
          <Text pl={2} color="#737577">
            ₹ {+value[0]}
          </Text>
          {+value[1] && (
            <Stack flexDirection="row">
              <Text textDecoration="line-through">{value[1]}</Text>{" "}
              <Text color="red.800">{value[2]} OFF</Text>{" "}
            </Stack>
          )}
        </Stack>
      </Stack>
    );
  });

  return (
    <>
      <AliceCarousel
        disableDotsControls
        disableButtonsControls
        items={myData}
        mouseTracking
        responsive={topSellerResponsive}
      />
    </>
  );
};

export default TopSeller;
