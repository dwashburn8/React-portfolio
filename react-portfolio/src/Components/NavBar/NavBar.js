import React from "react";
import "./NavBar.css"

const NavBar = () => {
    return (

<nav className="navbar navbar-center navbar-expand-lg navbar-dark bg-dark navbar-expand-md py-4">

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav navbar-center">
        <li className="nav-item active">
            <a className="nav-link text-primary" href="home"><h5>Home</h5> <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="home"><h5>About</h5></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="home"><h5>Portfolio</h5></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="home" tabIndex="-1" aria-disabled="true"><h5>Contact</h5></a>
        </li>
    </ul>
</div>
</nav>

    )
}

export default NavBar