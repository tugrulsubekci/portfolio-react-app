import React  from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About/About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";
import AllGames from "./AllGames";
import Game from "./Game";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <About />
            <Services />
            <Portfolio />
            <Contact />
          </>
        }/>
        <Route path="games" element={<AllGames/>}/>
        <Route path="games/:gameName" element={<Game/>}/>
      </Routes>
    </>
  );
}

export default App;
