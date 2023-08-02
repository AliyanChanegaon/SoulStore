import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { FilterOptionsModel } from "../../../utils/models/filter-options-model";
import SearchInput from "./search-input";

interface LeftFiltersProps {
  data: FilterOptionsModel;
  setSelectedCategory: (value: Array<string>) => void;
  selectedCategory: Array<string>;
  setSelectedSize: (value: string) => void;
  selectedSize: string;
}

const LeftFilters: React.FC<LeftFiltersProps> = ({
  data,
  setSelectedCategory,
  selectedCategory,
  setSelectedSize,
  selectedSize,
}) => {
  const [sliderValue, setSliderValue] = useState(499);
  const color = useColorModeValue("#58595b", "white");

  return (
    <Stack position={{ base: "relative", md: "unset" }}>
      <Stack
        alignSelf="center"
        w={{ base: "93%", md: "100%" }}
        mt={{ base: "5px", md: "0px" }}
        color={color}
        boxShadow={{
          base: "none",
          md: "rgba(0, 0, 0, 0.15) 2.6px 2.6px 2.6px",
        }}
      >
        <Accordion allowToggle>
          {data &&
            Object.entries(data)?.map((el, idx) => {
              return (
                <AccordionItem flex={1} key={idx}>
                  <Text as="h2">
                    <AccordionButton>
                      <Box
                        fontWeight="bold"
                        fontSize="sm"
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        {el[0].toLocaleUpperCase()}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Text>
                  <AccordionPanel display="flex" flexDirection="column">
                    <SearchInput
                      setSelectedCategory={setSelectedCategory}
                      selectedCategory={selectedCategory}
                      setSelectedSize={setSelectedSize}
                      selectedSize={selectedSize}
                      name={el[0]}
                      options={el[1]}
                    />
                  </AccordionPanel>
                </AccordionItem>
              );
            })}

          <AccordionItem flex={1}>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontWeight="bold"
                  fontSize="sm"
                >
                  PRICE
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box pt={6} pb={2}>
                <Slider
                  defaultValue={1999}
                  min={499}
                  max={1999}
                  step={15}
                  aria-label="slider-ex-4"
                  onChange={(val) => setSliderValue(val)}
                >
                  <SliderMark
                    value={sliderValue}
                    textAlign="center"
                    bg="teal"
                    color="white"
                    mt="-10"
                    ml="-5"
                    w="12"
                  >
                    {sliderValue}
                  </SliderMark>
                  <SliderTrack>
                    <SliderFilledTrack bg="teal" />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Stack>

      <Button
        variant="outline"
        colorScheme="teal"
        _hover={{ bgColor: "teal", color: "white" }}
        alignSelf="center"
        w={{ base: "40%", md: "100%" }}
        position={{ base: "absolute", md: "unset" }}
        top="-33%"
        left="5%"
        onClick={() => {
          setSelectedCategory([]);
          setSelectedSize("");
        }}
      >
        Clear filter
      </Button>
    </Stack>
  );
};

export default LeftFilters;
{
  /* <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                fontWeight="bold"
                fontSize="sm"
                as="span"
                flex="1"
                textAlign="left"
              >
                PRODUCTS
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} display="flex" flexDirection="column">
            <Checkbox colorScheme="green" defaultChecked>
              Checkbox
            </Checkbox>

            <Checkbox colorScheme="green" defaultChecked>
              Checkbox
            </Checkbox>

            <Checkbox colorScheme="green" defaultChecked>
              Checkbox
            </Checkbox>

            <Checkbox colorScheme="green" defaultChecked>
              Checkbox
            </Checkbox>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                fontWeight="bold"
                fontSize="sm"
                as="span"
                flex="1"
                textAlign="left"
              >
                SIZE
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} display="flex" flexDirection="column">
            <Checkbox colorScheme="green" defaultChecked>
              Checkbox
            </Checkbox>

            <Checkbox colorScheme="green" defaultChecked>
              Checkbox
            </Checkbox>

            <Checkbox colorScheme="green" defaultChecked>
              Checkbox
            </Checkbox>

            <Checkbox colorScheme="green" defaultChecked>
              Checkbox
            </Checkbox>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight="bold"
                fontSize="sm"
              >
                PRICE
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Box pt={6} pb={2}>
              <Slider
                defaultValue={1999}
                min={499}
                max={1999}
                step={15}
                aria-label="slider-ex-4"
                onChange={(val) => setSliderValue(val)}
              >
                <SliderMark
                  value={sliderValue}
                  textAlign="center"
                  bg="teal"
                  color="white"
                  mt="-10"
                  ml="-5"
                  w="12"
                >
                  {sliderValue}
                </SliderMark>
                <SliderTrack>
                  <SliderFilledTrack bg="teal" />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Box>
          </AccordionPanel>
        </AccordionItem> */
}
