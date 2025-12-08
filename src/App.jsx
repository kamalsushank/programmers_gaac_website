import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Recruitments from "./components/Recruitments";
import Blogs from "./components/Blogs";
import Signin from "./components/Signin";
import Teams from "./components/Teams";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/recruitments" element={<Recruitments />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
