import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Navber/Home/Home";
import OurMenu from "./components/Navber/Our menu/OurMenu";
import Contact from "./components/Navber/Contact/Contact";
import About from "./components/Navber/About/About";
import Login from "./components/Navber/Login/Login";
import Navber from "./components/Navber/Navber";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navber></Navber>
        <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/OurMenu" element={<OurMenu />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
