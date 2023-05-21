import React  from "react";
import Navbar from "./Navbar";
import About from "./About/About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";
import AllGames from "./AllGames";
import Game from "./Game";
import PrivacyPolicy from "./PrivacyPolicy";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <About />
            {/* <Services /> */}
            {/* <Portfolio /> */}
            <AllGames/>
            <Contact />
          </>
        }/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
        <Route path="/games" element={<AllGames/>}/>
        <Route path="/games/:gameName" element={<Game/>}/>


        <Route path="/solitaire/privacy-policy" element={<PrivacyPolicy/>}/>
      </Routes>
    </>
  );
}

export default App;
