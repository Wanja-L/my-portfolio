import React, { Component } from 'react';
import './App.css';
import portrait from './portrait.jpg';

class App extends Component {
    // Initialize state
    state = { projects: [] };

    // On load
    componentWillMount() {
        this.getProjects();
    }

    // Set state with our projects
    getProjects = () => {
        fetch('/api/projects')
            .then(res => res.json())
            .then(projects => this.setState({projects}));
    }

    render() {
        const { projects } = this.state;

        return (
            <div className="App" width="500">                

                <img src={portrait} alt="Picture of Wanja" width="500" height="500" style={{marginTop: 30}}></img>

                <h1>Hi, my name is Wanja</h1>
                <h3>I'm an aspiring developer!</h3>
                <p>I am a swiss raised kiwi who is passionate about web and tech that changes people's lives.</p>
                <br></br> 

                <h4>Here are a few of my projects</h4>

                {
                    projects.length ? (
                        projects.map((project, index) => (
                            <div key={project.name}>
                                <p><b><a href={project.html_url}>{project.name}</a></b></p>
                                <p>{project.description}</p>
                            </div>
                        ))
                    ) : (
                        <div>
                            Loading projects...
                        </div>
                    )
                }
            </div>
        );
    }
}

export default App;