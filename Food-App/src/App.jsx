import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Navber/Home/Home";
import OurMenu from "./components/Navber/Our menu/OurMenu";
import Contact from "./components/Navber/Contact/Contact";
import About from "./components/Navber/About/About";
import Login from "./components/Navber/Login/Login";
import Navber from "./components/Navber/Navber";
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
          </Routes>
        </userContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
