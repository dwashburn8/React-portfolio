import React from 'react';
import Home from "./Components/Home/Home"
import NavBar from "./Components/NavBar/NavBar"
// import Section from "./Components/Section/Section"
import About from "./Components/About/About"
import Wrapper from "./Wrapper"
// import Links from "./Components/Links/Links"
import Contact from "./Components/Contact/Contact"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Footer from "./Components/Footer/Footer"

const App = () => {
  return (
    <>
      <Router>
        <div>
      < NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Wrapper} />
      <Route path="/contact" component={Contact} />
      </div>
      </Router>
      < Footer />
</>
  );
}

export default App;
