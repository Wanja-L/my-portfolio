import React from 'react'
import styled from 'styled-components'

export default function ProjectCard (props) {
  const project = props.project

  const ProjectCard = styled.div`
    text-align: left;
    background-color: #b33f62;
    border-width: 4px;
    border-radius: 10px;
    padding: 2%;
    margin-top: 2%;
  `

  ProjectCard.displayName = 'ProjectCard'

  return (
    <ProjectCard>
      <p>
        <b>
          <a href={project.html_url} style={{ color: '#0C0A3E' }}>
            {project.name}
          </a>
        </b>
      </p>
      <p>{project.description}</p>
    </ProjectCard>
  )
}
