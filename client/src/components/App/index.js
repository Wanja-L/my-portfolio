import React, { useState } from 'react'
import styled from 'styled-components'
import Intro from '../Intro'
import Contact from '../Contact'
import Projects from '../Projects'
import Footer from '../Footer'
import ReactGA from 'react-ga'

export default function App () {
  const [projects, setProjects] = useState([])
  const [initialisedGA, setInitialisedGA] = useState(false)

  fetch('/api/projects')
    .then(res => res.json())
    .then(projects => setProjects(projects))

  const App = styled.div`
    text-align: center;
    font-family: 'Titillium Web', sans-serif;
    background: rgba(250, 58, 58, 0.95);
    border: 50px;
    border-radius: 20px;
    padding: 2%;
    position: absolute;
    top: 5%;
    left: 50%;
    width: 50%;
    transform: translate(-50%, 0%);
  `

  App.displayName = 'App'

  if (!initialisedGA) {
    ReactGA.initialize('UA-143195632-1')
    setInitialisedGA(true)
  }
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)

  return (
    <App>
      <Intro />
      <Contact />
      <Projects projects={projects} />
      <Footer />
    </App>
  )
}
