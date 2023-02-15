import React from "react";
import { TbCloudDownload } from "react-icons/tb";
import ketevanGagua from "../../assets/ketevanGagua.jpg";
import "./about.css";

export const About = () => {
  return (
    <section id="about" className="about section container">
      <div className="sectionTitle">
        <span className="titleNumber">01.</span>
        <h5 className="titleText">
          About Me
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="sectionContent grid">
        <div className="textSection">
          <h4>
            I'm success-driven, determined Front-End Devevloper. I have
            experience using HTML Sass Javascript and React to build accessible
            component-based web pages and systems. <br />
            Ability to deliver quality results while collaborating in rapidly
            changing work environments and team compositions.
            <br />A passionate person willing to learn more technologies to
            become a better developer than i was yesterday. So determined and
            result oriented.
          </h4>
          <div className="aboutBtn">
            <a
              href="KetevanGagua.CV.pdf"
              download="KetevanGagua.CV.pdf"
              className="flex"
            >
              Downoload CV <TbCloudDownload className="icon" />
            </a>
          </div>
        </div>
        <div className="aboutImgDiv">
          <img src={ketevanGagua} alt="KetevanGagua" className="aboutImg" />
        </div>
      </div>
    </section>
  );
};
