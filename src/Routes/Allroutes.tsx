import { Routes, Route } from "react-router-dom";
import Men from "../pages/men";
import Women from "../pages/women";
import Kid from "../pages/kid";
import Wishlist from "../pages/wishlist";
import Cart from "../pages/cart";
import Login from "../pages/login";
import Register from "../pages/register";
import MensProduct from "../pages/mens-product";
import WomensProduct from "../pages/womens-product";
import KidsProduct from "../pages/kids-product";
import SingleProductPage from "../components/smallcomponents/single-product-page/single-product-page";

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
      <Route path="/womens-product" element={<WomensProduct />} />
      <Route path="/kids-product" element={<KidsProduct />} />
      <Route path="/:page/product/:id" element={<SingleProductPage />} />
    </Routes>
  );
};

export default Allroutes;
