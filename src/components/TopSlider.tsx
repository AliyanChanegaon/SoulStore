import { Card, Image, SimpleGrid, CardBody } from "@chakra-ui/react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

interface sliderProp {
  data: string[];
  collection?: boolean;
}
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const TopSlider = (data: sliderProp) => {
  console.log(data.collection);
  const myData = data.data?.map((el: string, idx: number) => (
    <Image key={idx} width={data.collection?"95%":"full"}  className="item" data-value={idx} src={el} />
  ));

  return (
    <>
      {data.collection == true ? (
          <AliceCarousel
          mouseTracking
          disableDotsControls
          disableButtonsControls
          items={myData}
          
          responsive={responsive}
          
      />
    
      ) : (
        <AliceCarousel
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={1000}
          animationDuration={1000}
          animationType="fadeout"
          infinite
          touchTracking={true}
          disableButtonsControls
          items={myData}
        />
      )}
    </>
  );
};

export default TopSlider;
