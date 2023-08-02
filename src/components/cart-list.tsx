import { FC } from "react";
import { ProductModel } from "../utils/model/product-data-model";
import CartItem from "./cart-item";
import { VStack } from "@chakra-ui/react";

interface CartListProp {
    data: ProductModel[];

}

export const CartList: FC<CartListProp> = ({data}) => {
  console.log(data);
  return  <VStack w="100%"  flexDirection="column">{
    data?.map((el,idx:number)=>(
        <CartItem key={idx} data={el}/>
    ))
  }</VStack>;
};
