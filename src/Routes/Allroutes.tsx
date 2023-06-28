import { Routes, Route } from "react-router-dom";
import Men from "../pages/men";
import Women from "../pages/women";
import Kid from "../pages/kid";


const Allroutes = () => {
  return (
    <Routes>
    <Route path="/men" element={<Men />} />
    <Route path="/women" element={<Women />} />
    <Route path="/kid" element={<Kid />} />
    </Routes>

  )
}

export default Allroutes;