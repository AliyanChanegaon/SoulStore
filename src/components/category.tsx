import { Grid, GridItem, Image } from "@chakra-ui/react";
import "../App.css";

interface sliderProp {
  data: string[];
  category?: string;
}

const Category = (data: sliderProp) => {
  console.log(data.data);
  return (
    <>
      {(() => {
        switch (data.category) {
          case "mensCategory":
            return (
              <Grid
                templateColumns={{ base: "repeat(2fr)", md: "repeat(12, 1fr)" }}
                gap="2"
                color="blackAlpha.700"
                fontWeight="bold"
                w="95%"
              >
                {data.data.map((el: string, idx: number) => {
                  const value = el.split(" ");

                  return (
                    <GridItem
                      key={idx}
                      maxW={{ base: "100%", md: "none" }}
                      colSpan={[1, +value[1]]}
                      overflow="hidden"
                    >
                      <Image
                        src={value[0]}
                        cursor="pointer"
                        transition="all 0.3s ease-in-out"
                        w="100%"
                        _hover={{ transform: "scale(1.1)" }}
                      />
                    </GridItem>
                  );
                })}
              </Grid>
            );
          
          
            case "womensCategory":
              return (
                <Grid
                  templateColumns={{ base: "repeat(2fr)", md: "repeat(12, 1fr)" }}
                  gap="2"
                  color="blackAlpha.700"
                  fontWeight="bold"
                  w="95%"
                >
                  {data.data.map((el: string, idx: number) => {
                    const value = el.split(" ");
  
                    return (
                      <GridItem
                        key={idx}
                        maxW={{ base: "100%", md: "none" }}
                        colSpan={[1, +value[1]]}
                        overflow="hidden"
                      >
                        <Image
                          src={value[0]}
                          cursor="pointer"
                          transition="all 0.3s ease-in-out"
                          w="100%"
                          _hover={{ transform: "scale(1.1)" }}
                        />
                      </GridItem>
                    );
                  })}
                </Grid>
              );

              case "kidsCategory":
              return (
                <Grid
                  templateColumns={{ base: "repeat(2fr)", md: "repeat(8, 1fr)" }}
                  gap="2"
                  color="blackAlpha.700"
                  fontWeight="bold"
                  w="95%"
                >
                  {data.data.map((el: string, idx: number) => {
                   
                      
                    return (
                      <GridItem
                        key={idx}
                        maxW={{ base: "100%", md: "none" }}
                        colSpan={2}
                        overflow="hidden"
                      >
                        <Image
                          src={el}
                          cursor="pointer"
                          transition="all 0.3s ease-in-out"
                          w="100%"
                          _hover={{ transform: "scale(1.1)" }}
                        />
                      </GridItem>
                    );
                  })}
                </Grid>
              );
        
        }
      })()}
    </>
  );
};

export default Category;
