import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./layouts/Landing-Page";
import Login from "./layouts/Login";
import Register from "./layouts/Register";
import Gallery from "./layouts/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/gallery"} element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
