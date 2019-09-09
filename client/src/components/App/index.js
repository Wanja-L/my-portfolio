import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Intro from '../Intro'
import Contact from '../Contact'
import Projects from '../Projects'
import Footer from '../Footer'
import ReactGA from 'react-ga'
import { device } from '../../util/device'

export default function App () {
  const [projects, setProjects] = useState([])
  const [initialisedGA, setInitialisedGA] = useState(false)

  useEffect(() => {
    if (!initialisedGA) {
      ReactGA.initialize('UA-143195632-1')
      setInitialisedGA(true)
    }
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
  }, [])

  fetch('/api/projects')
    .then(res => res.json())
    .then(projects => setProjects(projects))

  const App = styled.div`
    text-align: center;
    font-family: 'Titillium Web', sans-serif;
    background: transparent;
    border: 50px;
    border-radius: 20px;
    padding: 2%;
    position: absolute;
    transform: translate(-50%, 0%);
    @media ${device.mobileS} {
      left: 50%;
      width: 90%;
    }
    @media ${device.tablet} {
      left: 50%;
      width: 70%;
    }
    @media ${device.laptop} {
      top: 5%;
      left: 50%;
      width: 60%;
    }
  `

  App.displayName = 'App'

  document.body.style = 'background-color: #4e508f;'

  return (
    <App>
      <Intro />
      <Contact />
      <Projects projects={projects} />
      <Footer />
    </App>
  )
}
