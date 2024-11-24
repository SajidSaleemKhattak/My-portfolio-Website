import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      {/* <Header></Header> */}
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}
export default App;
