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
import PageNotFound from "../pages/page-not-found";
import Address from "../pages/address";
import OrderConfirmPage from "../pages/Order-confirm-page";
import PaymentPage from "../pages/payment-page";
import PrivateRoute from "./private-routes";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Men />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/kid" element={<Kid />} />

      <Route
        path="/wishlist"
        element={
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/mens-product"
        element={
          <PrivateRoute>
            <MensProduct />
          </PrivateRoute>
        }
      />
      <Route
        path="/womens-product"
        element={
          <PrivateRoute>
            <WomensProduct />
          </PrivateRoute>
        }
      />
      <Route
        path="/kids-product"
        element={
          <PrivateRoute>
            <KidsProduct />
          </PrivateRoute>
        }
      />
      <Route
        path="/:page/product/:id"
        element={
          <PrivateRoute>
            <SingleProductPage />
          </PrivateRoute>
        }
      />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/address"
        element={
          <PrivateRoute>
            <Address />
          </PrivateRoute>
        }
      />
      <Route path="/payment-successful" element={<OrderConfirmPage />} />
      <Route
        path="/payment"
        element={
          <PrivateRoute>
            <PaymentPage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Allroutes;
