import React from "react";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import Home from "./components/Navber/Home/Home";
import OurMenu from "./components/Navber/Our menu/OurMenu";
import Contact from "./components/Navber/Contact/Contact";
import About from "./components/Navber/About/About";
import Login from "./components/Navber/Login/Login";
import Navber from "./components/Navber/Navber";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import Signup from "./components/Navber/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

function Main() {
  const location = useLocation();

  // Exclude navbar on login and signup pages
  const noNavBarRoutes = ["/login", "/signup"];
  const showNavBar = !noNavBarRoutes.includes(location.pathname.toLowerCase());

  return (
    <>
      {showNavBar && <Navber />}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/OurMenu" element={<OurMenu />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
