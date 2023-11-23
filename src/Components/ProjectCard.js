import "../Styles/projects.css";

const ProjectCard = ({ projectName, projectImage }) => {
  const info = {
    WigglesDesc:"A pawsome full-stack hub for dogs: health, fun, social connections.",
    WigglesGithub: "https://github.com/DevanshSahni/Wiggles/",
    WigglesWebsite: "https://wiggles.vercel.app/",

    BloggerDesc:"An effective real-time blog application build using MERN stack.",
    BloggerGithub: "https://github.com/anu0108/blogApp",
    BloggerWebsite: "https://blogger-n99b.vercel.app/",

    TaskTrackerDesc:"This app aims to boost productivity by better organising daily tasks.",
    TaskTrackerGithub: "https://github.com/anu0108/taskTracker",
    TaskTrackerWebsite: "https://tranquil-toffee-a5d2ce.netlify.app/",

    WordalyserDesc:"A fully Responsive Web App to analyse your text quickly & efficiently.",
    WordalyserGithub: "https://github.com/anu0108/Wordalyser",
    WordalyserWebsite: "https://chimerical-medovik-6c14a2.netlify.app/",
  };

  return (
    <div className="project-card">
      <div className="image-container">
        <img className="project-image" src={projectImage} alt="projectImage" />
      </div>

      <div className="project-info">
        <h3>{projectName}</h3>
        <div className="project-text">
          <p>{info[projectName + "Desc"]}</p>
        </div>

        <a href={info[projectName + "Website"]} className="project-links" target="_blank" rel="noreferrer">
          Website
        </a>
        <a href={info[projectName + "Github"]} className="project-links" target="_blank" rel="noreferrer">
          Github
        </a>
        
      </div>
    </div>
  );
};

export default ProjectCard;
