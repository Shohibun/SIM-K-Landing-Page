import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./layouts/Landing-Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
