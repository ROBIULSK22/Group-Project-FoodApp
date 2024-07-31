import React from "react";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import Home from "./components/Navber/Home/Home";
import OurMenu from "./components/Navber/Our menu/OurMenu";
import Contact from "./components/Navber/Contact/Contact";
import About from "./components/Navber/About/About";
import Login from "./components/Navber/Login/Login";
import Navber from "./components/Navber/Navber";
import Adminlogin from "./components/Navber/AdminLogin/Adminlogin";
import CreateAccount from "./components/Navber/CreateAccount/CreateAccount";
import Mycart from "./components/Navber/MyCart/Mycart";
import Admin from "./components/Navber/Admin/Admin";
import { useState, useContext, createContext } from "react";
import "./App.css";

export const userContext = createContext(null);

function App() {
  const [user, setUser] = useState(false);

  return (
    <>
      <BrowserRouter>
        <userContext.Provider value={{ user: user, setUser: setUser }}>
          {/* <Navber></Navber> */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/OurMenu" element={<OurMenu />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/Mycart" element={<Mycart />} />
            <Route path="/CreateAccount" element={<CreateAccount />} />
            <Route path="/Adminlogin" element={<Adminlogin />} />
            <Route path="/Admin" element={<Admin/>} />

          </Routes>
        </userContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
