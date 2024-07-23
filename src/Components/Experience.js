import React from "react";
import JobList from "./JobList";
import "../Styles/experience.css";
import FadeInSection from "./FadeInSection";

class Experience extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="experience">
        <FadeInSection>
          <div className="section-header">
            <h1 className="heading-experience">
              Experience
            </h1>
            {/* <span className="section-title">/ experience</span> */}
          </div>
          <JobList></JobList>
        </FadeInSection>
      </div>
    );
  }
}

export default Experience;
