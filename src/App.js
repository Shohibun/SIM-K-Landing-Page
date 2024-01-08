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

// Responsive Tailwind:
// 1. Langsung berukuran mobile
// 2. Jika ingin responsive bisa menggunakan sm(640px), md(768px), lg(1024px), xl(1280px), dan 2xl(1536px)
// 3. Penggunan responsive pada tailwind dengan cara menggunakan container di nomer 2
// 4. Jika menggunakan md, maka ukuran layer 768px keatas akan terresponsive dan berlaku pada tampilan dekstop

// Responsive Query: 
// 1. @media only screen and (max-width: 600px) {...} -> “Jika [lebar perangkat] kurang dari atau sama dengan 600 piksel, lakukan {...}.”
// 2. @media only screen and (min-width: 600px) {...} -> “Jika [lebar perangkat] lebih besar dari atau sama dengan 600 piksel, lakukan {...}“

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
