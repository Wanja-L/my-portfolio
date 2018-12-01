import React, { Component } from 'react'
import '../App.css'

class ProjectCard extends Component {
  render () {
    const project = this.props.project
    return (
      <div className='ProjectCard' key={project.name}>
        <p>
          <b>
            <a href={project.html_url} style={{ color: 'rgb(60,60,80)' }}>
              {project.name}
            </a>
          </b>
        </p>
        <p>{project.description}</p>
      </div>
    )
  }
}

export default ProjectCard
