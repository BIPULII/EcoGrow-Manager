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
import Footer from "./components/Footer/Footer";
import AuthGuard from "./components/AuthGuard/AuthGuard";//to derect users to login page if they are not logged in

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* <Route path="/inventory" element={<Inventory/>}/> */}
        {/* <Route path="/plantwiki" element={<PlantWiki/>}/> */}
        {/* <Route path="/container" element={<Container/>}/> */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/container" element={
          <AuthGuard>
            <Container />
          </AuthGuard>
        } />
        <Route path="/plantwiki" element={
          <AuthGuard>
            <PlantWiki />
          </AuthGuard>
        } />
        <Route path="/inventory" element={
          <AuthGuard>
            <Inventory />
          </AuthGuard>
        } />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
};

export default App;
