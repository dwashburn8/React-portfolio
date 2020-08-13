import React from "react";
// import "./About.css"


const About = () => {
    return (

        <>
            <div className="header">
                <div className=""></div>
                <video playsInline autoPlay muted >
                    <source id="video" src={process.env.PUBLIC_URL + "/images/Grunge - 39410.mp4"} type="video/mp4"></source>
                </video>
                <div className="container h-100">
                    <div className="d-flex h-100 text-center align-items-center">
                        <div className="w-100 text-white">
                            <h1 className="text-danger font-weight-bold">About Me</h1>


                        </div>
                    </div>
                </div>
            </div>


            <div id="div2" className="card  border-light bg-gradient-dark">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <div className="card-body text-center">
                            <div>
                                <img className="rounded-circle" src={process.env.PUBLIC_URL + "/images/Head Shot 8.JPG"} height="400px" width="450px" alt=""></img>
                            </div>

                            <br></br>
                            <br></br>
                            <h3 className="card-text">Who am I?</h3>
                            <p> Full Stack Web Developer with a background in information technology. Graduate of the University of Arizona Coding Boot Camp with skills in HTML, CSS, JavaScript, MySQL and more. Experience and knowledge creating high-quality, scalable, predictable, and high-performance web applications. Team player, using experience from real estate to work with all kinds of individuals in a professional setting. Seeking the role of Software Developer.  </p>
                            <br></br>
                            <a type="button" target="_blank" href="https://docs.google.com/document/d/1dWCpdlMzEqC-9rPbOGXo-1IL-6_mn_cPHcBkZlGWDPQ/edit?usp=sharing" className="btn btn-outline-dark">View My Resume</a>
                            <br></br>
                            <br></br>
                            <p>Phone Number: 480-217-6119</p>
                            <p>Email: soldbydw@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-sm-12 text-center">
                        <h1 className="text-center"><span className="border-bottom border-primary">SKILLS</span></h1>
                        <br></br>
                        <div className="row">
                            <div className="col">

                                <div className="border border-dark">
                                    <h5 className="text-center"><u>Computer Science applied to JavaScript</u></h5>
                                    <ul>
                                        <li>Algorithms (Searches, Sorts)</li>
                                        <li>Efficiency</li>
                                        <li>Time Complexity</li>
                                        <li>Big O Notation</li>
                                        <li>Data Structures</li>
                                    </ul>
                                </div>

                                <br></br>
                                <div className="border border-dark">
                                    <h5 className="text-center"><u>Browser Based Technologies</u></h5>
                                    <ul>
                                        <li>HTML5</li>
                                        <li>CSS</li>
                                        <li>Responsive Design</li>
                                        <li>JavaScript</li>
                                        <li>jQuery</li>
                                        <li>Handlebars</li>
                                        <li>Local Storage,
                                            Session Storage,
                                    IndexedDB</li>
                                        <li>React.js</li>
                                    </ul>
                                </div>
                                <br></br>
                                <div className="border border-dark">
                                    <h5 className="text-center"><u>Api Interaction</u></h5>
                                    <ul>
                                        <li>API</li>
                                        <li>AJAX</li>
                                        <li>JSON</li>
                                    </ul>
                                </div>
                                <br></br>

                            </div>
                            <div className="col">
                                <div className="border border-dark">
                                    <h5 className="text-center"><u>Databases</u></h5>
                                    <ul>
                                        <li>MySQL</li>
                                        <li>MongoDB</li>
                                    </ul>
                                </div>
                                <br></br>
                                <div className="border border-dark">
                                    <h5 className="text-center"><u>Server Side Development</u></h5>
                                    <ul>
                                        <li>Node.js</li>
                                        <li> Express</li>
                                        <li> User Authentication</li>
                                        <li> Progressive Web Applications (PWAs)</li>
                                        <li> MERN Stack (React.js, Express.js, MongoDB, Node.js)</li>
                                    </ul>
                                </div>
                                <br></br>
                                <div className="border border-dark">
                                    <h5 className="text-center"><u>Quality Assurance</u></h5>
                                    <ul>
                                        <li>Unit Testing</li>
                                        <li> Functional Testing</li>
                                        <li> Linting</li>
                                        <li> Continuous Integration</li>
                                    </ul>
                                </div>
                                <br></br>
                                <div className="border border-dark">
                                    <h5 className="text-center"><u>Deployment/Command-Line Fundamentals</u></h5>
                                    <ul>
                                        <li>Heroku</li>
                                        <li>Git</li>
                                        <li>Github Pages</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;