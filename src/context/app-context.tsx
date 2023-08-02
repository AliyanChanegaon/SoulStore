import { createContext, useState } from "react";
import { ProductModel } from "../utils/models/product-data-model";
import { useToast } from "@chakra-ui/react";

export interface MyContextType {
  status: { [key: string]: boolean };
  data: dataItemProp;
  setData: (value: dataItemProp) => void;
  updateList: (value: ProductModel, type: string) => void;
  RemoveItem: (id: number, type: string) => void;
  MoveItem: (product: ProductModel, type: string) => void;
}

const handlingError = {
  isLoading: false,
  isError: false,
};

export type dataItemProp = {
  cartData: ProductModel[];
  wishList: ProductModel[];
};

const dataItem = {
  cartData: [],
  wishList: [],
};

export const AppContext = createContext<MyContextType>({
  status: {},
  data: dataItem,
  setData: () => {},
  updateList: () => {},
  RemoveItem: () => {},
  MoveItem: () => {},
});
const AppContextProvider = ({ children }: any) => {
  const [status] = useState<{ [key: string]: boolean }>(handlingError);
  const toast = useToast();
  const [data, setData] = useState<dataItemProp>(dataItem);

  const updateList = (product: ProductModel, type: string) => {
    if (type == "Cart") {
      const updatedData = {
        ...data,
        cartData: [...data.cartData, product],
      };
      setData(updatedData);
    }
    if (type == "Wishlist") {
      if (data.wishList.includes(product)) {
        const newArr = data.wishList.filter((el) => product != el);
        const updatedData = {
          ...data,
          wishList: newArr,
        };
        setData(updatedData);

        toast({
          title: "Item Removed",
          duration: 3000,
          isClosable: true,
        });

        return;
      }

      toast({
        title: "Added to wishlist",
        description: "shop more or go to cart.",
        duration: 3000,
        isClosable: true,
      });

      const updatedData = {
        ...data,
        wishList: [...data.wishList, product],
      };
      setData(updatedData);
    }
  };

  const RemoveItem = (id: number, type: string) => {
    // Cart

    if (type === "Cart") {
      let newArr = data.cartData.filter((el) => el.id != id);

      const updatedData = {
        ...data,
        cartData: newArr,
      };
      setData(updatedData);
    } else {
      let newArr = data.wishList.filter((el) => el.id != id);
      const updatedData = {
        ...data,
        wishList: newArr,
      };
      setData(updatedData);
    }
  };

  const MoveItem = (product: ProductModel, type: string) => {
    if (type === "To-Wishlist") {
      let updatedCartData = data.cartData.filter((el) => el.id != product.id);

      setData({
        cartData: [...updatedCartData],
        wishList: [...data.wishList, product],
      });
    }

    if (type === "To-Cart") {
      let updatedCartData = data.cartData.filter((el) => el.id != product.id);

      setData({
        wishList: [...updatedCartData],
        cartData: [...data.cartData, product],
      });
    }
  };
  console.log(999 * 1.12);

  return (
    <AppContext.Provider
      value={{
        status,
        data,
        setData,
        updateList,
        RemoveItem,
        MoveItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
