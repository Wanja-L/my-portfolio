import React, { useState } from 'react'
import '../App.css'
import Intro from '../Intro/Intro'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import Footer from '../Footer/Footer'

function App () {
  const [projects, setProjects] = useState([])
  fetch('/api/projects')
    .then(res => res.json())
    .then(projects => setProjects(projects))

  return (
    <div className='App'>
      <Intro />
      <Contact />
      <Projects projects={projects} />
      <Footer />
    </div>
  )
}

export default App
