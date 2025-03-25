import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import BackToTopButton from "./components/common/BackToTopButton";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import { SearchProvider } from "./components/common/SearchContext";
import {
  About,
  Property,
  Contact,
  PageNotFound,
  PropertyDetails,
  Home,
} from "./pages";
import { closeDropdown } from "./features/uiSlice";
import Dropdown from "./components/common/DropDown";

function App() {
  const [showButton, setShowButton] = useState(false);
  const dispatch = useDispatch();
  const route = useLocation();

  // Handle Scroll Event in useEffect
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup event
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  const handleCloseDropdown = () => {
    dispatch(closeDropdown());
  };

  return (
    <SearchProvider> {/* Wrap the whole app in SearchProvider */}
      <Navbar />
      <Dropdown />
      
      <div className="min-h-screen pb-40" onClick={handleCloseDropdown}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/property" element={<Property />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>

      {/* Footer Section */}
      <div className="px-[2%] md:px-[6%] bg-card-dark border border-card-dark">
       
        <div className="mt-20">
          <Footer />
        </div>
      </div>

      <BackToTopButton showButton={showButton} />
    </SearchProvider>
  );
}

export default App;
