import "../Styles/contact.css";
import email from "../Images/email.webp"
import { Link } from "react-router-dom";


const Contact = () => {
  return (
    <div className="contact-container">
      <div >
      <img src={email} alt="" className="mail" />
      </div>
      <div className="contact">
        <h1>Let's Stay in Touch</h1>
        <p>Feel free to reach out! Whether you have questions, collaboration ideas, or just want to connect, I'm here. You can drop me a <b>message</b> via email, or <b>connect</b> with me on LinkedIn.</p>

        <div className="contact-btn">
            <a href="mailto:anuragwadhwa786@gmail.com"><button className="contact-email">Email</button></a>
            <Link to="https://www.linkedin.com/in/anurag-wadhwa-8148621b7/" target="_blank"><button className="contact-linkedIn">LinkedIn</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
