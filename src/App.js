import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";
import Monday from "./Components/Monday";
import Tuesday from "./Components/Tuesday";
import Wednesday from "./Components/Wednesday";
import Thursday from "./Components/Thursday";
import Friday from "./Components/Friday";
import Saturday from "./Components/Saturday";

const pageTitle = "Exercise - The GYM";

function App() {
  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home pageTitle={pageTitle} />} />
        <Route exact path="/home" element={<Home pageTitle={pageTitle} />} />
        <Route
          exact
          path="/monday"
          element={<Monday pageTitle={pageTitle} />}
        />
        <Route
          exact
          path="/tuesday"
          element={<Tuesday pageTitle={pageTitle} />}
        />
        <Route
          exact
          path="/wednesday"
          element={<Wednesday pageTitle={pageTitle} />}
        />
        <Route
          exact
          path="/thursday"
          element={<Thursday pageTitle={pageTitle} />}
        />
        <Route
          exact
          path="/friday"
          element={<Friday pageTitle={pageTitle} />}
        />
        <Route
          exact
          path="/saturday"
          element={<Saturday pageTitle={pageTitle} />}
        />

        <Route path="*" element={<NotFound pageTitle={pageTitle} />} />
      </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
