import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { TbArrowBigRightLines } from "react-icons/tb";
import { TbChevronsDown } from "react-icons/tb";
import "./home.css";

export const Home = () => {
  return (
    <section id="home" className="home section container">
      <div className="leftIcons">
        <div className="socials grid">
          <a href="" target="_blank">
            <AiFillGithub className="icon" />
          </a>
          <a href="" target="_blank">
            <FiTwitter className="icon" />
          </a>
          <a href="" target="_blank">
            <FiYoutube className="icon" />
          </a>
          <div className="line"></div>
        </div>
      </div>

      <div className="homeContainer">
        <span className="introText">Hi my name is,</span>
        <h1 className="title">Ketevan Gagua</h1>
        <span className="subTitle">
          I develope scalable web based applications and software and styles to
          serve the exavt need.
        </span>
        <p className="homeParagraph">
          {" "}
          I code within required coding standards and{" "}
        </p>

        <div className="lowerHomeSection">
          <button className="contactBtn">
            <a href="#contact" className="flex">
              Contact me <TbArrowBigRightLines className="icon" />
            </a>
          </button>
          <div className="scrollDiv">
            <a href="#about" className="flex">
              <h6 className="scroll">
                Scroll Down <TbChevronsDown className="icon" />
              </h6>
            </a>
          </div>
        </div>
      </div>
      <div className="rightEmail">
        <div>
          <div className="emailAddress">
            <a href="https://mailto:ketevangagua83@gmail.com" target="_blank">
              ketevangagua83@gmail.com
            </a>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </section>
  );
};
