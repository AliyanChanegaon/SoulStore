import { Routes, Route } from "react-router-dom";
import Men from "../pages/men";
import Women from "../pages/women";
import Kid from "../pages/kid";
import Wishlist from "../pages/wishlist";
import Cart from "../pages/cart";
import Login from "../pages/login";
import Register from "../pages/register";
import MensProduct from "../pages/mens-product";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/kid" element={<Kid />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/mens-product" element={<MensProduct />} />
      <Route path="/womens-product" element={<MensProduct />} />
    </Routes>
  );
};

export default Allroutes;
