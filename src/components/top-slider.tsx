import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Card,
  Image,
  SimpleGrid,
  CardBody,
  HStack,
  border,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

interface sliderProp {
  data: string[];
  collection?: string;
}

const collectionResponsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const MerchandiseResponsive = {
  0: { items: 3 },
  568: { items: 3 },
  1024: { items: 5 },
};

const TopSlider = (data: sliderProp) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => {
    activeIndex == 0
      ? setActiveIndex(myData.length - 1)
      : setActiveIndex(activeIndex - 2);
  };

  const slideNext = () => {
    activeIndex == myData.length - 1
      ? setActiveIndex(0)
      : setActiveIndex(activeIndex + 2);
  };

  const myData = data?.data?.map((el: string, idx: number) => (
    <Image
      key={idx}
      width={(() => {
        switch (data.collection) {
          case "topSection":
            return "100%";

          case "collectionItems":
            return "97%";

          case "officialMerchandise":
            return "90%";
        }
      })()}
      className="item"
      data-value={idx}
      src={el}
    />
  ));

  return (
    <>
      {(() => {
        switch (data.collection) {
          case "topSection":
            return (
              <AliceCarousel
                autoPlay
                autoPlayStrategy="none"
                autoPlayInterval={1000}
                animationDuration={1000}
                animationType="fadeout"
                infinite
                touchTracking={true}
                disableButtonsControls
                disableSlideInfo={true}
                items={myData}
              />
            );
          case "mens-TopSection":
            return (
              <AliceCarousel
                autoPlay
                autoPlayStrategy="none"
                autoPlayInterval={1000}
                animationDuration={1000}
                animationType="fadeout"
                infinite
                touchTracking={true}
                disableButtonsControls
                disableDotsControls
                disableSlideInfo={true}
                items={myData}
              />
            );
          case "collectionItems":
            return (
              <AliceCarousel
                mouseTracking
                disableDotsControls
                disableButtonsControls
                items={myData}
                responsive={collectionResponsive}
              />
            );
          case "officialMerchandise":
            return (
              <Stack width="100%" position="relative">
                <ChevronLeftIcon
                  display={{ base: "none", md: "inline" }}
                  position="absolute"
                  zIndex="1"
                  top="34%"
                  left="0%"
                  height="50px"
                  width="auto"
                  color="white"
                  cursor="pointer"
                  onClick={slidePrev}
                />
                <AliceCarousel
                  disableDotsControls
                  disableButtonsControls
                  items={myData}
                  mouseTracking
                  responsive={MerchandiseResponsive}
                />
                <ChevronRightIcon
                  display={{ base: "none", md: "inline" }}
                  position="absolute"
                  zIndex="1"
                  top="34%"
                  right="1%"
                  height="50px"
                  width="auto"
                  color="white"
                  cursor="pointer"
                  onClick={slideNext}
                />
              </Stack>
            );
        }
      })()}
    </>
  );
};

export default TopSlider;
