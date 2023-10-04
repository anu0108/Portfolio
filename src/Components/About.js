import "../Styles/about.css";
import Lottie from "lottie-react";
import Developer_Yogi from "../LottieFiles/Developer_Yogi.json";
import Skills from "./Skills";

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
          I'm a final year college student pursuing <b>B.Tech in CSE</b> from
          New Delhi, India. With a strong love for web development, I specialize
          in the <b>MERN stack</b>, showcasing a keen understanding of data
          structures, algorithms, and robust problem-solving skills.
        </p>

        <p>
          My tech journey pivoted during my <b>internship</b> as a front-end
          developer at Bharat Heavy Electricals Limited, Delhi. It was here that
          I refined my skills, gained real-world experience and enhanced my
          ability to create flawless user interfaces.
        </p>

        <p>
          Open to challenges, I'm eager for <b>collaborations</b>, constantly
          learning, committed to meaningful projects. <b>Join</b> me on this
          exciting coding expedition, where innovation meets dedication, and
          every line of code paves the way for digital excellence. Explore some
          of my work in the <b>Projects</b> section. 
        </p>

        <p>Beyond the field of technology, I find joy in singing and playing the guitar.</p>
      </div>
    </div>
    <Skills/>
    </>
  );
};

export default About;
