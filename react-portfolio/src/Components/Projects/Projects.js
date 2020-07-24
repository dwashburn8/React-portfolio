import React from "react";
import "./Projects.css"


const Projects = () => {
    return (
        <>
            <div className="header">
                <div className=""></div>
                <video playsInline autoPlay muted >
                    <source id="video" src="./images/Ink - 42151.mp4" type="video/mp4"></source>
                </video>
                <div className="container h-100">
                    <div className="d-flex h-100 text-center align-items-center">
                        <div className="w-100 text-white">
                            <h1 className="text-danger font-weight-bold">Portfolio</h1>


                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="container">
                <div className="row text-center">

                    <div className="col-sm-10 col-md-12 mb-3 col-lg-4 imgWrap">
                        <img className="rounded" height="300px" width="350px" src="./images/architecture-1477041_960_720.webp" alt="day planner"></img>
                        <div className="imgLink">
                            <br></br>
                            <br></br>
                            <br></br>
                            <h4 className="">Full Stack</h4>
                            <h4> Home Hunter Real Estate App</h4>
                            <p className="text-danger">HTML / CSS / JavaScript / MySql / Node.js</p>
                            <a href="https://github.com/dwashburn8/House-Hunter-App" className="btn btn-outline-primary">View Project</a>
                            <a href="https://vast-bayou-08421.herokuapp.com/login" className="btn btn-outline-primary">View Deployed</a>

                        </div>

                    </div>
                    <div className="col-sm-10 col-md-12 mb-3 col-lg-4 imgWrap">
                        <img className="rounded" height="300px" width="350px" src="./images/maxresdefault.jpg" alt=""></img>
                        <div className="imgLink">
                            <br></br>
                            <br></br>
                            <br></br>

                            <h4> React Simpsons Directory</h4>
                            <p className="text-danger">React.js, CSS3</p>
                            <a href="https://github.com/dwashburn8/burger" className="btn btn-outline-primary">View Project</a>
                            <a href="https://boiling-wildwood-73625.herokuapp.com/" className="btn btn-outline-primary">View Deployed</a>

                        </div>

                    </div>
                    <div className="col-sm-10 col-md-12 mb-3 col-lg-4 imgWrap">
                        <img className="rounded" height="300px" width="350px" src="./images/organization-2478211_960_720.webp" alt=""></img>
                        <div className="imgLink">
                            <br></br>
                            <br></br>
                            <br></br>
                            <h4 className="">Employee Manager</h4>
                            <p className="text-danger">Node.js / MySql</p>
                            <a href="https://github.com/dwashburn8/employee-tracker" className="btn btn-outline-primary">View Project</a>

                        </div>

                    </div>

                </div>


                <br></br>
                <div className="row text-center">
                    <div className="col-sm-10 col-md-12 mb-3 col-lg-4 imgWrap">
                        <img className="rounded" height="300px" width="350px" src="./images/paper-3213924_960_720.webp" alt=""></img>
                        <div className="imgLink">
                            <br></br>
                            <br></br>
                            <br></br>
                            <h4 className="">Employee Summary Generator</h4>
                            <p className="text-danger">HTML / CSS / Node.js</p>
                            <a href="https://github.com/dwashburn8/Employee-Summary" className="btn btn-outline-primary">View Project</a>

                        </div>

                    </div>
                    <div className="col-sm-10 col-md-12 mb-3 col-lg-4 imgWrap">
                        <img className="rounded" height="300px" width="350px" src="./images/sky-3513221_960_720.jpg" alt=""></img>
                        <div className="imgLink">
                            <br></br>
                            <br></br>
                            <br></br>
                            <h4 className="">Weather Dashboard</h4>
                            <p className="text-danger">HTML / JQuery</p>

                            <a href="https://github.com/dwashburn8/Weather-Dashboard" className="btn btn-outline-primary">View Project</a>
                            <a href="https://dwashburn8.github.io/Weather-Dashboard/" className="btn btn-outline-primary">View Deployed</a>

                        </div>

                    </div>
                    <div className="col-sm-10 col-md-12 mb-3 col-lg-4 imgWrap">
                        <img className="rounded" height="300px" width="350px" src="./images/social-networking-2187996_960_720.jpg" alt=""></img>
                        <div className="imgLink">
                            <br></br>
                            <br></br>
                            <br></br>
                            <h4 className="">Gif / Music Generator</h4>
                            <p className="text-danger">HTML / CSS / JQuery</p>

                            <a href="https://github.com/dwashburn8/Gif-Music-Generator" className="btn btn-outline-primary">View Project</a>
                            <a href="https://dwashburn8.github.io/Gif-Music-Generator/." className="btn btn-outline-primary">View Deployed</a>

                        </div>

                    </div>

                </div>


                <br></br>



            </div>
        </>
    )
}

export default Projects