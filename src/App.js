import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./layouts/Landing-Page";
import Login from "./layouts/Login";
import Register from "./layouts/Register";
import Gallery from "./layouts/Gallery";
import Shop from "./layouts/Shop";
import Contact from "./layouts/Contact";
import Profile from "./layouts/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/gallery"} element={<Gallery />} />
        <Route path={"/shop"} element={<Shop />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/profile"} element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
