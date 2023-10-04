import "../Styles/skills.css";
import {motion} from "framer-motion"
import { IconContext } from 'react-icons'
import {IoLogoJavascript, IoLogoReact, IoLogoNodejs,IoLogoCss3, IoLogoHtml5} from "react-icons/io5"
import {SiExpress, SiVisualstudio, SiCplusplus,SiMongodb} from "react-icons/si"
import {FaBootstrap, FaGitAlt, FaGithub, FaFigma, FaNpm} from "react-icons/fa"

const Skills = () => {
  return (
    <div className="skills-section">
      <h1>Professional Skillset</h1>

      <motion.div
      className="skills-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <IconContext.Provider value={{ className: "skill-cards" }}>
          <IoLogoReact title="ReactJS" />
          <IoLogoNodejs title="NodeJS" />
          <SiExpress title="ExpressJS" />
          <SiMongodb title="MongoDB" />
          <IoLogoJavascript title="JavaScript" />
          <SiCplusplus title="C++" />
          <FaGitAlt title="Git" />
          <FaGithub title="Github" />
          <IoLogoCss3 title="CSS3" />
          <FaBootstrap title="Bootstrap" />
          <IoLogoHtml5 title="HTML5" />
          <FaFigma title="Figma" />
          <FaNpm title="Node Package Manager (npm)" />
          <SiVisualstudio title="Visual Studio Code" />
        </IconContext.Provider>
      </motion.div>
    </div>
  );
};

export default Skills;
