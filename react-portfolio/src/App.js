import React from 'react';
import Home from "./Components/Home/Home"
import NavBar from "./Components/NavBar/NavBar"
import Section from "./Components/Section/Section"
import About from "./Components/About/About"
import Projects from "./Components/Projects/Projects"
import Links from "./Components/Links/Links"
import Contact from "./Components/Contact/Contact"
import { BrowserRouter as Router, Route } from "react-router-dom"

const App = () => {
  return (
    
      <Router>
        <div>
      < NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Projects} />
      <Route path="/contact" component={Contact} />
      </div>
      </Router>

  );
}

export default App;
