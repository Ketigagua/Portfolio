import React, { useState } from "react";
import "./navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

export const Navbar = () => {
  const [active, setActive] = useState("navBar");

  const showNavBar = () => {
    setActive("navBar activeNavBar");
  };
  const removeNavBar = () => {
    setActive("navBar");
  };

  const [activeHeader, setActiveHeader] = useState("header");
  const addBG = () => {
    if (window.scrollY >= 10) {
      setActiveHeader("header activeHeader");
    } else {
      setActiveHeader("header");
    }
  };
  window.addEventListener("scroll", addBG);

  return (
    <header className={activeHeader}>
      <div className="logoDiv">
        <h1 className="logo">
          <a href="#home">KG_Portfolio</a>
        </h1>
      </div>
      <div className={active}>
        <ul onClick={removeNavBar} className="navLists">
          <li className="navItem">
            <a href="#about" className="navLink">
              <span className="headerNumber">1. </span>About
            </a>
          </li>
          <li className="navItem">
            <a href="#skills" className="navLink">
              <span className="headerNumber"> 2. </span>Skills
            </a>
          </li>
          <li className="navItem">
            <a href="#projects" className="navLink">
              <span className="headerNumber"> 3. </span>Projects
            </a>
          </li>
          <li className="navItem">
            <a href="#contact" className="navLink">
              <span className="headerNumber"> 4. </span> Contact
            </a>
          </li>
          <button className="btn">
            {" "}
            <a href=""> Resume</a>
          </button>
        </ul>
        <div onClick={removeNavBar} className="closeNavBar">
          <AiFillCloseCircle className="icon" />
        </div>
      </div>
      <div onClick={showNavBar} className="toggleNavBar">
        <TbGridDots className="icon" />
      </div>
    </header>
  );
};
