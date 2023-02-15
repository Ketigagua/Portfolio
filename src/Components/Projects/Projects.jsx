import React from "react";
import { BsGithub } from "react-icons/bs";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";

import "./projects.css";
const data = [
  {
    id: 1,
    image: "",
    github: "https://github.com/Ketigagua/shopping.git",
    title: "E-commerce website",
    desc: "This is a e-commerce website, you can buy here technique. ",
    tech1: "React",
    tech2: "JavaScript",
    tech3: "Html, CSS",
  },
  {
    id: 2,
    image: img2,
    liveLink: "http://www.omnifood.net/",
    github: "",
    title: "Omnifood",
    desc: "This is a Healthy Food's house. ",
    tech1: "html",
    tech2: "CSS",
    tech3: "JQuery",
  },
  {
    id: 2,
    image: img4,
    liveLink: "https://natours.netlify.app/",
    github: "",
    title: "Natours-Travel",
    desc: "In this website you can Discover Tours. ",
    tech1: "html",
    tech2: "CSS",
    tech3: "JQuery",
  },
  {
    id: 5,
    image: img5,
    liveLink:
      "https://www.figma.com/proto/en7BgsrP4WmSTgOqlt3949/Untitled?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2",
    github: "",
    title: "Time",
    desc: "Design for construction company ",
    tech1: "",
    tech2: "",
    tech3: "Figma",
  },

  {
    id: 4,
    image: img3,
    liveLink: "https://ketigagua.github.io/Clock/",
    title: "The Greenery",
    desc: " Real world Time",
    tech1: "",
    tech2: "",
    tech3: "Javascript/ DOM manipulation",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="projects section container">
      <div className="sectionTitle">
        <span className="titleNumber">03.</span>
        <h5 className="titleText">Projects</h5>
        <div className="underline">
          <span></span>
        </div>
      </div>

      <div className="projectContainer grid">
        {data.map(
          ({
            id,
            github,
            image,
            liveLink,
            desc,
            demo,
            title,
            tech1,
            tech2,
            tech3,
          }) => {
            return (
              <div key={id} className="singleProject">
                <div className="externalLinks flex">
                  <div className="githubIcon">
                    <a href={liveLink} target="_blank">
                      <BsGithub className="icon" />
                    </a>
                  </div>
                </div>

                <div className="imgDiv">
                  <a href={liveLink} target="_blank">
                    <img src={image} alt={title} />
                  </a>
                </div>

                <div className="projectTitle">
                  <h3> {title}</h3>
                </div>
                <div className="desc">{desc}</div>
                <div className="technologies flex">
                  <small>{tech1}</small>
                  <small>{tech2}</small>
                  <small>{tech3}</small>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};
