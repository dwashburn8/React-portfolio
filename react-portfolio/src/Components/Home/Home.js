import React from "react";
import "./Home.css"
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div id="home" className="header">
                <div className="overlay"></div>
                <video playsInline autoPlay muted>
                  <source id="video" src="/images/Paint - 4043.mp4" type="video/mp4"></source>
                </video>
                <div className="container h-100">
                  <div className="d-flex h-100 text-center align-items-center">
                    <div className="w-100 text-white">
                            <h1 className="text-light font-weight-bold">Hello, I'm <span className="text-danger">Dallas Washburn</span>
                            </h1>
                            <h2 className="text-light font-weight-bold">I'm a full-stack web developer</h2>
                            <Link to="/about" role="button" type="button" className="btn btn-outline-light mr-2">About Me</Link>
                            <Link to="/portfolio" role="button" type="button" className="btn btn-outline-danger mr-2">View my work</Link>
                            <Link to="/contact" role="button" type="button" className="btn btn-outline-light">Contact Me</Link>


                    </div>
                  </div>
                </div>
              </div>
    )
}

export default Home