import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { FaSass } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { SiPostman } from "react-icons/si";
import { SiPinterest } from "react-icons/si";
import "./skills.css";

export const Skills = () => {
  return (
    <section id="skills" className="skills container section">
      <div className="sectionTitle">
        <span className="titleNumber">02.</span>
        <h5 className="titleText">
          {" "}
          Skills
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>
      <div className="skillsContiner grid">
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Web Development</h2>
            <span className="subTitle"> Less than 1 year Experience</span>
          </div>

          <div className="generalSkills">
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaReact className="icon" />
              </div>
              <span className="skillName">React</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoJavascript className="icon" />
              </div>
              <span className="skillName">JavaScript</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiHtml5 className="icon" />
              </div>
              <span className="skillName">HTML5</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoCss3 className="icon" />
              </div>
              <span className="skillName">CSS3</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaSass className="icon" />
              </div>
              <span className="skillName">Sass</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiBootstrap className="icon" />
              </div>
              <span className="skillName">Bootstrap</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiMaterialui className="icon" />
              </div>
              <span className="skillName">Materialui</span>
            </div>
          </div>
        </div>
      </div>
      <div className="skillsContiner grid">
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">UI/UX Design</h2>
            <span className="subTitle"> Less than 1 year Experience</span>
          </div>
          <div className="generalSkills">
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaFigma className="icon" />
              </div>
              <span className="skillName">Figma</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiAdobexd className="icon" />
              </div>
              <span className="skillName">XD</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiAdobephotoshop className="icon" />
              </div>
              <span className="skillName">PS</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiPinterest className="icon" />
              </div>
              <span className="skillName">Pinterest</span>
            </div>
          </div>
        </div>
      </div>

      <div className="skillsContiner grid">
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Other skills</h2>
            <span className="subTitle"> Less than 1 year Experience</span>
          </div>
          <div className="generalSkills">
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaGitSquare className="icon" />
              </div>
              <span className="skillName">Git</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <BsGithub className="icon" />
              </div>
              <span className="skillName">Github</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiPostman className="icon" />
              </div>
              <span className="skillName">Postman</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
