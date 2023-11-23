import "../Styles/projects.css"
import ProjectCard from "./ProjectCard"
import BloggerImage from "../Images/Blogger.jpeg"
import TaskTracker from "../Images/Task Tracker.jpg"
import Wordalyser from "../Images/Wordalyser.jpg"
import Wiggles from "../Images/Wiggles.jpg"

const Projects = () => {
    return(
        <div className="projects-section">
            <h1>My Recent <b>Works</b></h1>
            <h4>Here are a few projects I've worked on recently!</h4>
            <div className="projects">
                <ProjectCard projectName="Wiggles" projectImage={Wiggles} />
                <ProjectCard projectName="Blogger" projectImage={BloggerImage} />
                <ProjectCard projectName="TaskTracker" projectImage={TaskTracker} />
                <ProjectCard projectName="Wordalyser" projectImage={Wordalyser} />
            </div>
        </div>
    )
}

export default Projects