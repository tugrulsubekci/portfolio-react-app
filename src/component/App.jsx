import React  from "react";
import Header from "./Header";
import About from "./About/About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
