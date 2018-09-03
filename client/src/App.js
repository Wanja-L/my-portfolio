import React, { Component } from "react";
import "./App.css";
import portrait from "./portrait.jpg";

class App extends Component {
  // Initialize state
  state = { projects: [] };

  // On load
  componentWillMount() {
    this.getProjects();
  }

  // Set state with our projects
  getProjects = () => {
    fetch("/api/projects")
      .then(res => res.json())
      .then(projects => this.setState({ projects }));
  };

  render() {
    const { projects } = this.state;

    return (
      <div className="App">
        <div className="Section">
          <img
            src={portrait}
            style={{ "margin-top": "5%" }}
            alt="Picture of Wanja"
            width="70%"
            height="70%"
          />

          <h1>Hi, my name is Wanja</h1>
          <h2>I'm an aspiring developer!</h2>

          <p>
            I am a swiss raised kiwi who is passionate about web and tech that
            changes people's lives.
          </p>
          <br />
        </div>

        <div className="Section">
          <h3>Contact Info</h3>
          <p>
            email:{" "}
            <a
              class="u-email"
              href="mailto:wanja.leuthold@gmail.com"
              style={{ color: "rgb(50,50,80)" }}
            >
              wanja.leuthold@gmail.com
            </a>
          </p>
          <p>mobile: 0210418761</p>
          <br />
        </div>

        <div className="Section">
          <h3>Here are a few of my projects:</h3>

          {projects.length ? (
            projects
              .sort((p1, p2) => {
                return Date.parse(p2.updated_at) - Date.parse(p1.updated_at);
              })
              .map((project, index) => (
                <div className="ProjectCard" key={project.name}>
                  <p>
                    <b>
                      <a
                        href={project.html_url}
                        style={{ color: "rgb(60,60,80)" }}
                      >
                        {project.name}
                      </a>
                    </b>
                  </p>
                  <p>{project.description}</p>
                </div>
              ))
          ) : (
            <div>Loading projects...</div>
          )}
        </div>
        <div className="Footer">
          <p>This webapp uses React and Node.js, and consumes the github API</p>
        </div>
      </div>
    );
  }
}

export default App;
