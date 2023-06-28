import { Grid, GridItem, Image } from "@chakra-ui/react";
import "../App.css";
import { useState } from "react";

interface sliderProp {
  data: string[];
}

const Category = (data: sliderProp) => {
  const handleHover = (e: any) => {
    e.target.classList.add("hello");
  };

  const handleMouseLeave = (e: any) => {
    e.target.classList.remove("hello");
  };

  return (
    <Grid
      templateColumns={{ base: "repeat(1fr)", md: "repeat(12, 1fr)" }}
      gap="2"
      color="blackAlpha.700"
      fontWeight="bold"
      w="95%"
    >
      {data.data.map((el: string, idx: number) => {
        const value = el.split(" ");

        return (
          <GridItem key={idx} colSpan={+value[1]} overflow="hidden">
            <Image
              src={value[0]}
              cursor="pointer"
              onMouseEnter={(e) => handleHover(e)}
              onMouseLeave={(e) => handleMouseLeave(e)}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default Category;
