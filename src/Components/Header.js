import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/header.css";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [headerblur, setHeaderblur] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const HandleClick = () => {
    setIsClicked(!isClicked);
  };

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      setHeaderblur(true);
    } else {
      setHeaderblur(false);
    }
  };

  window.addEventListener("scroll", scrollHandler);
  return (
    <header className="header-container">
      <div
        className={headerblur ? "header blur" : "header"}
        // className="header"
      >
        <Link className="logo" to="/">
          ANURAG
        </Link>
        <div className="nav-menu">
          <a href="#" className="nav-links">
            {" "}
            HOME{" "}
          </a>
          <a href="#about" className="nav-links">
            {" "}
            ABOUT{" "}
          </a>
          <a href="#experience" className="nav-links">
            {" "}
            EXPERIENCE{" "}
          </a>
          <a href="#projects" className="nav-links">
            {" "}
            PROJECTS{" "}
          </a>
          <Link to="/resume" className="nav-links">
            {" "}
            RESUME{" "}
          </Link>
          <Link to="/contact" className="nav-links">
            {" "}
            CONTACT{" "}
          </Link>
        </div>
        {!isClicked && (
          <IoReorderThreeOutline className="menuIcon" onClick={HandleClick} />
        )}

        {isClicked && (
          <RxCross1 className="iconsDisplay" onClick={HandleClick} />
        )}

        {isClicked && (
          <div className="dropdown-menu">
            <Link to="/" className="nav-links" id="home">
              {" "}
              HOME{" "}
            </Link>
            <Link to="/about" className="nav-links">
              {" "}
              ABOUT{" "}
            </Link>
            <Link to="/projects" className="nav-links">
              {" "}
              PROJECTS{" "}
            </Link>
            <Link to="/resume" className="nav-links">
              {" "}
              RESUME{" "}
            </Link>
            <Link to="/contact" className="nav-links">
              {" "}
              CONTACT{" "}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
