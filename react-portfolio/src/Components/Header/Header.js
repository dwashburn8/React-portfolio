import React from "react";
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
                <div className="overlay"></div>
                <video playsInline="playsinline" autoPlay muted="muted" loop>
                  <source id="video" src="./images/Pexels Videos 4703.mp4" type="video/mp4"></source>
                </video>
                <div className="container h-100">
                  <div className="d-flex h-100 text-center align-items-center">
                    <div className="w-100 text-white">
                            <h1 className="text-light font-weight-bold">Hello, I'm <span className="text-danger">Dallas Washburn</span>
                            </h1>
                            <h2 className="text-light font-weight-bold">I'm a full-stack web developer</h2>
                            <a href="#projects" type="button" className="btn btn-outline-light">View my work</a>
                    </div>
                  </div>
                </div>
              </div>
    )
}

export default Header