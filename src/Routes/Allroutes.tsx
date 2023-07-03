import { Routes, Route } from "react-router-dom";
import Men from "../pages/men";
import Women from "../pages/women";
import Kid from "../pages/kid";
import Wishlist from "../pages/wishlist";
import Cart from "../pages/cart";
import Login from "../pages/login";
import Register from "../pages/register";


const Allroutes = () => {
  return (
    <Routes>
    <Route path="/men" element={<Men />} />
    <Route path="/women" element={<Women />} />
    <Route path="/kid" element={<Kid />} />
    <Route path="/wishlist" element={<Wishlist />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/register" element={<Register/>}/>
    
    
    </Routes>

  )
}

export default Allroutes;