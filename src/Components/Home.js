import "../Styles/home.css";
import Lottie from "lottie-react";
import Developer from "../LottieFiles/Developer.json";
import TypingEffect from "./TypingEffect";

const Home = () => {
  return (
    <div className="portfolio-container">
      <div className="developer-container">
      <Lottie className="developer" animationData={Developer} loop={true} />
      </div>
      <div className="content">
        <h1>ANURAG WADHWA</h1>
        <TypingEffect />
        <h3>
          I'm on a mission to code dreams into reality. Explore my world where
          lines of code create digital magic.
        </h3>
      </div>
    </div>
  );
};

export default Home;
