import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/ABout";
import OurServices from "./pages/Our-Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Our-Services" element={<OurServices />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
