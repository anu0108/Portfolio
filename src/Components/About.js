import "../Styles/about.css";
import Lottie from "lottie-react";
import Developer_Yogi from "../LottieFiles/Developer_Yogi.json";
import Skills from "./Skills";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="about-container">
        <Lottie
          className="developer-yogi"
          animationData={Developer_Yogi}
          loop={true}
        />
        <div className="about-text">
          <h2>Learn About Me</h2>
          <p id="para1">
            I'm a <b>B.Tech graduate in CSE</b> from New Delhi, India. With a
            strong love for web development, I specialize in the{" "}
            <b>MERN stack</b>, showcasing a keen understanding of data
            structures, algorithms, and robust problem-solving skills.
          </p>

          <p>
            I have over 8 months of industry internship experience. I am
            currently working with{" "}
            <a href="https://www.linkedin.com/company/techjockey/mycompany/">
              <b>Techjockey</b>
            </a>
            , the world's first online Software-Store that helps you compare and
            choose the right software for your needs.
          </p>

          <p>
            I've also worked with a funded startup
            <a href="https://www.linkedin.com/company/fitverse-fit/">
              <b> Fitverse</b>
            </a>
            , where I played a key role in developing their UI and their
            software Gravity. This experience further diversified my skill set
            and exposed me to different facets of the industry.
          </p>

          <p>
            Open to challenges, I'm eager for <b>collaborations</b>, constantly
            learning, committed to meaningful projects. <b>Join</b> me on this
            exciting coding expedition, where innovation meets dedication, and
            every line of code paves the way for digital excellence. Explore
            some of my work in the <b>Projects</b> section.
          </p>

          <p>
            Beyond the field of technology, I find joy in singing and playing
            the guitar.
          </p>
        </div>
      </div>
      <Skills />
    </>
  );
};

export default About;
