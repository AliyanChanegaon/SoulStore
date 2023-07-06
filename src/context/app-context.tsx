import { createContext, useState } from "react";
import { ProductModel } from "../utils/model/product-data-model";
import { mensItem, womensItem } from "../utils/Data";

interface MyContextType {
  status: { [key: string]: boolean };
  data: dataItemProp;
  userData: {};
}

const handlingError = {
  isLoading: false,
  isError: false,
  isAuth: false,
};

type dataItemProp = {
  cartData: ProductModel[];
  wishList: ProductModel[];
};

const dataItem = {
  cartData: [],
  wishList: [],
};

const breadcrumbData = {
  mens: {
    path: "mens",
    title: "Mens-Section",
  },
  womens: {
    path: "womens",
    title: "Womens-Section",
  },
  kids: {
    path: "kids",
    title: "Kids-Section",
  },
};

const WomensData = [
  {
    sliderImages: [
      "./src/img/Womens/Womens-Productpage-Img's/Top-slider/1.png",
      "./src/img/Womens/Womens-Productpage-Img's/Top-slider/2.png",
      "./src/img/Womens/Womens-Productpage-Img's/Top-slider/3.png",
    ],
    breadcrumbData: [{ path: "womens" }, { title: "Womens-Section" }],
    mensItem: womensItem,
    options: [
      {
        product: [
          "Women Boxy Fit Shirts",
          "Women Oversized T-Shirts",
          "Women Shirts",
          "Women Oversized Crop Tops",
          "Women Mandarin Shirts",
          "Cropped Tank Tops",
          "Women Boxy Fit Polos",
          "Women Cut-Out Crop Tops",
          "Women T-Shirts",
          "Boyfriend T-Shirts",
          "Women Cropped Tops",
          "Cropped Shirts",
          "Women Oversized Cropped T-Shirts",
        ],
      },
      {
        size: [
          "XXS",
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL",
          "XXXL",
          "4-5Y",
          "5-6Y",
          " 6-7Y",
          "7-8Y",
          "8-9Y",
          "9-10Y",
          "10-11Y",
          "11-12Y",
          "12-14Y",
        ],
      },
    ],
  },
];

const MensData = [
  {
    sliderImages: [
      "./src/img/Mens/Mens-Productpage-Img's/Top-slider/1.png",
      "./src/img/Mens/Mens-Productpage-Img's/Top-slider/2.png",
      "./src/img/Mens/Mens-Productpage-Img's/Top-slider/3.png",
    ],
    breadcrumbData: [{ path: "mens" }, { title: "Mens-Section" }],
    mensItem: mensItem,
    options: [
      {
        product: [
          "T-shirts",
          "Shirts",
          "Oversized T-shirts",
          "joggers",
          "jeans",
          "Polos",
          "Supima",
        ],
      },
      {
        size: [
          "XXS",
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL",
          "XXXL",
          "4-5Y",
          "5-6Y",
          "6-7Y",
          "7-8Y",
          "8-9Y",
          "9-10Y",
          "10-11Y",
          "11-12Y",
          "12-14Y",
        ],
      },
    ],
  },
];

export const AppContext = createContext<MyContextType | undefined>(undefined);
const AppContextProvider = ({ children }: any) => {

  const [status, setStatus] = useState<{ [key: string]: boolean }>(handlingError);

  const [data, setData] = useState<dataItemProp>(dataItem);

  const [userData, setUserData] = useState<{ ss: 0 }>({ ss: 0 });

  return (
    <AppContext.Provider value={{ status, userData, data }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
