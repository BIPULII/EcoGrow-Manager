import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import AboutUs from "./components/AboutUs/AboutUs";
import Inventory from "./components/Inventory/Inventory";
import PlantWiki from "./components/Plantwiki/Plantwiki";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/inventory" element={<Inventory/>}/>
        <Route path="/plantwiki" element={<PlantWiki/>}/>
        <Route path="/container" element={<Container/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
};

export default App;
