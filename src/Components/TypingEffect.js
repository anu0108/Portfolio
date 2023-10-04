import Typewriter from "typewriter-effect";
import "../Styles/home.css"

const TypingEffect = () => {
  return (
    <div className="typing-effect">
      <Typewriter
        options={{
          strings: ["Software Engineer", "MERN Stack Developer"],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 18,
        }}
      />
    </div>
  );
};

export default TypingEffect;
