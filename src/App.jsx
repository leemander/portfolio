import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Lee Mander</h1>
        <nav>
          <ul>
            <Link to="/">Home</Link>
          </ul>
          <ul>
            <Link to="/salmon-cookies">Salmon Cookies</Link>
          </ul>
          <ul>
            <Link to="/odd-duck">Odd Duck Products</Link>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/salmon-cookies"
          element={<Project title="Salmon Cookies" />}
        ></Route>
        <Route
          path="/odd-duck"
          element={<Project title="Odd Duck Products" />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
