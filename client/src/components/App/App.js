import React, { Component } from 'react'
import '../App.css'
import Intro from '../Intro/Intro'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import Footer from '../Footer/Footer'

class App extends Component {
  // Initialize state
  state = { projects: [] }

  // On load
  componentWillMount () {
    this.getProjects()
  }

  // Set state with our projects
  getProjects = () => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(projects => this.setState({ projects }))
  }

  render () {
    const { projects } = this.state

    return (
      <div className='App'>
        <Intro />
        <Contact />
        <Projects projects={projects} />
        <Footer />
      </div>
    )
  }
}

export default App
