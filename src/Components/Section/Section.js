import React from "react";

const Section = () => {
    return (
<>
        <section className="card text-center border-light">

            <div className="card-body">
                {/* <a name="about"></a> */}
                <div>
                    <h1 className="card-title"><span
                        className="border-bottom border-primary">ABOUT</span> </h1>
                </div>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <div id="aboutRow" className="row">

                <div  className="col-sm-3">
                    <img className="border-light" height="175px" width="175px" src="./images/time-1606153_960_720.webp"
                        alt="Time"></img>
                        <h4>Fast</h4>
                        <p>Fast load times and lag free interaction, my highest priority.</p>
                </div>

                    <div  className="col-sm-3">
                        <img className="border-light" height="175px" width="175px" src="./images/smartphone-1132677_960_720.png"
                            alt="smartphone"></img>
                            <h4>Responsive</h4>
                            <p>My layouts will work on any device, big or small.</p>
                </div>
                        <div  className="col-sm-3">
                            <img className="border-light" height="175px" width="175px" src="./images/brain-2235771_960_720.png"
                                alt="brain"></img>
                                <h4>Intuitive</h4>
                                <p>Strong preference for easy to use, intuitive UX/UI.</p>
                </div>
                            <div  className="col-sm-3">
                                <img className="border-light" height="175px" width="175px" src="./images/time-1606153_960_720.webp"
                                    alt="dynamic"></img>
                                    <h4>Dynamic</h4>
                                    <p>Websites don't have to be static, I love making pages come to life.</p>
                 </div>




                            </div>
        </section>
                        <br></br>
                        <br></br>
</>
                        )
            };

            export default Section;