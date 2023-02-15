import React from "react";
import "./app.css";
import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { Home } from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { Projects } from "./Components/Projects/Projects";
import { Skills } from "./Components/Skills/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/*      
     
      <Footer /> */}
    </div>
  );
};
export default App;
