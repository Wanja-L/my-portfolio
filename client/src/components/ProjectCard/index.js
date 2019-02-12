import React from 'react'
import styled from 'styled-components'

export default function ProjectCard (props) {
  const project = props.project

  const ProjectCard = styled.div`
    text-align: left;
    border-color: rgba(0, 0, 0, 0.5);
    border-width: 4px;
    border-style: solid;
    border-radius: 10px;
    padding: 2%;
    margin-top: 2%;
  `

  ProjectCard.displayName = 'ProjectCard'

  return (
    <ProjectCard>
      <p>
        <b>
          <a href={project.html_url} style={{ color: 'rgb(60,60,80)' }}>
            {project.name}
          </a>
        </b>
      </p>
      <p>{project.description}</p>
    </ProjectCard>
  )
}
