import React from "react";
import Links from "../Links/Links"

const Contact = () => {
    return (
        <>
               <div  className="header">
                <div className=""></div>
                <video playsInline autoPlay muted>
                  <source id="video" src="./images/Transition - 23325.mp4" type="video/mp4"></source>
                </video>
                <div className="container h-100">
                  <div className="d-flex h-100 text-center align-items-center">
                    <div className="w-100 text-white">
                            <h1 className="text-danger font-weight-bold">Contact Me
                            </h1>
                            <h2 className="text-light font-weight-bold"></h2>


                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row text-center">
                  <div className="col-12">
                    <h1>Please Contact me anytime </h1>
                    <h2>480-217-6119</h2>
                    <h2>Qwkmarketing@gmail.com</h2>
                  </div>
                </div>

              </div>
              <Links />
    </>
    )
}

export default Contact