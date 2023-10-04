import { BiLogoGithub } from "react-icons/bi";
import { AiFillFile } from "react-icons/ai";
import "../Styles/projects.css";

const ProjectCard = ({ projectName, projectImage }) => {
  const info = {
    BloggerDesc:"An effective real-time blog application build using MERN stack.",
    BloggerGithub: "https://github.com/anu0108/blogApp",
    BloggerWebsite: "https://drive.google.com/file/d/18O5mi1Blb5CnwKXBBuji2sDYYY25_0bw/view",

    TaskTrackerDesc:"This app aims to boost productivity by better organising daily tasks.",
    TaskTrackerGithub: "https://github.com/anu0108/taskTracker",
    TaskTrackerWebsite: "https://tranquil-toffee-a5d2ce.netlify.app/",

    WordalyserDesc:"A fully Responsive Web App to analyse your text quickly and efficiently.",
    WordalyserGithub: "https://github.com/anu0108/Wordalyser",
    WordalyserWebsite: "https://chimerical-medovik-6c14a2.netlify.app//",
  };

  return (
    <div className="project-card">
      <div className="image-container">
        <img className="project-image" src={projectImage} alt="projectImage" />
      </div>

      <div className="project-info">
        <h2>{projectName}</h2>
        <div className="project-text">
          <p>{info[projectName + "Desc"]}</p>
        </div>


        <a href={info[projectName + "Github"]} target="_blank" rel="noreferrer">
          <button className="project-btn">
            <BiLogoGithub /> Github
          </button>
        </a>
        <a href={info[projectName + "Website"]} target="_blank" rel="noreferrer">
          <button className="project-btn"><AiFillFile/> Demo</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
