import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Landing from './components/Inicio/landing.js';
import Redes from './components/Redes/redes.js';
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/social" element={<Redes />} />
    </Routes>
  </BrowserRouter>
);


reportWebVitals();
