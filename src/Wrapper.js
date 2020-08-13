import React from "react";
import ProjectsCard from "./Components/Projects/Projects"
import projects from "./Projects.json"
import Container from "./Components/Container/Container"

class Wrapper extends React.Component {
    state = {
        projects
    };

    render() {
        return (
            <>
                <div className="header">
                    <div className=""></div>
                    <video playsInline autoPlay muted >
                        <source id="video" src={process.env.PUBLIC_URL + "/images/Ink - 42151.mp4"} type="video/mp4"></source>
                    </video>
                    <div className="container h-100">
                        <div className="d-flex h-100 text-center align-items-center">
                            <div className="w-100 text-white">
                                <h1 className="text-danger font-weight-bold">Portfolio</h1>


                            </div>
                        </div>
                    </div>
                </div>
                        <Container>
                
                    <div className="row text-center">
                            {this.state.projects.map(project => (
                                <ProjectsCard
                                    id={project.id}
                                    key={project.id}
                                    name={project.name}
                                    image={project.image}
                                    languages={project.languages}
                                    github={project.github}
                                    deployed={project.deployed}
                                />

                            ))}
                        
                        </div>
                        </Container>
            </>
                    )
                }
            }
            
export default Wrapper