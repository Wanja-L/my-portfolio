import React from 'react'
import styled from 'styled-components'
import ProjectCard from '../ProjectCard'

export default function Projects (props) {
  const projects = props.projects

  const Projects = styled.div`
    text-align: center;
    background-color: #f3c677;
    border-width: 4px;
    border-radius: 15px;
    padding: 2%;
    margin-top: 2%;
  `

  Projects.displayName = 'Projects'

  return (
    <Projects>
      <h3>Here's my most recent Github activity:</h3>

      {projects.length ? (
        projects
          .sort((p1, p2) => {
            return Date.parse(p2.updated_at) - Date.parse(p1.updated_at)
          })
          .map((project, index) => <ProjectCard project={project} />)
      ) : (
        <div>Loading projects...</div>
      )}
    </Projects>
  )
}
