import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import "./App.css";

import projects from "../projects";

function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="container">
          <h1>Lee Mander</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/salmon-cookies">Salmon Cookies</Link>
              </li>
              <li>
                <Link to="/odd-duck">Odd Duck Products</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {projects.map((project) => (
          <Route
            key={project.id}
            path={project.path}
            element={<Project props={project.props} />}
          ></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
