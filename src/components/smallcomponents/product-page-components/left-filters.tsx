import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Input,
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
import { FilterOptionsModel } from "../../../utils/model/filter-options-model";

const LeftFilters = (data: { data: FilterOptionsModel }) => {
  console.log(data);
  let newArr = data;

  const [sliderValue, setSliderValue] = useState(499);
  const color = useColorModeValue("#58595b", "white");

  return (
    <Stack color={color} boxShadow="rgba(0, 0, 0, 0.15) 2.6px 2.6px 2.6px">
      <Accordion allowToggle>
        {data?.data &&
          Object.entries(data?.data)?.map((el) => {
            return (
              <AccordionItem>
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
                <AccordionPanel pb={4} display="flex" flexDirection="column">
                  <Input placeholder={`Search ${el[0]}`} />
                  {el[1]?.map((option) => (
                    <Checkbox colorScheme="green">{option}</Checkbox>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        
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
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};

export default LeftFilters;
{/* <AccordionItem>
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
        </AccordionItem> */}