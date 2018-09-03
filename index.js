const express = require("express");
const app = express();
const path = require("path");
const fetch = require("node-fetch");

const port = process.env.PORT || 5000;

app.get("/api/projects", (req, res) => {
  // Return projects as json
  res.json(projectsData);
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port);
console.log(`My Portfolio is listening on ${port}`);

let projectsData = [];

const githubRepoUrl = "https://api.github.com/users/Lithowan/repos";

function getProjects() {
  fetch(githubRepoUrl)
    .then(res => res.json())
    .then(projects => {
      const gitHubProjects = projects.map(project => {
        return {
          name: project.name,
          html_url: project.html_url,
          description: project.description,
          updated_at: project.updated_at
        };
      });

      projectsData = projectsData.concat(gitHubProjects);
      console.log(`Loaded ${projectsData.length} projects`);
    });
}

getProjects();
