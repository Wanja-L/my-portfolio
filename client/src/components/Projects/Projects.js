import React, { Component } from 'react'
import '../App.css'
import ProjectCard from '../ProjectCard/ProjectCard'

class Projects extends Component {
  render () {
    const projects = this.props.projects
    return (
      <div className='Section'>
        <h3>Here are a few of my projects:</h3>

        {projects.length
          ? projects
              .sort((p1, p2) => {
                return Date.parse(p2.updated_at) - Date.parse(p1.updated_at)
              })
              .map((project, index) => <ProjectCard project={project} />)
          : <div>Loading projects...</div>}
      </div>
    )
  }
}

export default Projects
