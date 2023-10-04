import "../Styles/footer.css"
import { Link } from "react-router-dom";
import { BiLogoLinkedin } from 'react-icons/bi'
import { BiLogoGithub } from 'react-icons/bi'
import { BsInstagram } from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'

const Footer = () =>{
    return(
        <div className="footer-container">
            <p>Developed by Anurag Wadhwa </p>
            <div className="social-media">
                <div className="social-media-bg">
                <Link to="https://www.linkedin.com/in/anurag-wadhwa-8148621b7/" target="_blank" className="social-media-links"> <BiLogoLinkedin/> </Link>
                </div>
                <div className="social-media-bg">
                <Link to="https://github.com/anu0108" target="_blank" className="social-media-links"> <BiLogoGithub/> </Link>
                </div>
                <div className="social-media-bg">
                <Link to="https://leetcode.com/anuragwadhwa018/" target="_blank" className="social-media-links"> <SiLeetcode/> </Link>
                </div>
                <div className="social-media-bg">
                <Link to="https://www.instagram.com/anuragwadhwaa/" target="_blank" className="social-media-links"> <BsInstagram/> </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;