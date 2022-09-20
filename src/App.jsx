import React from "react";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Header from "./components/Header/header";
import Project from "./components/Project/project";
import Skill from "./components/Skill/skill";

const App = ( ) => {
    return(
        <>
            <Header />
            <About />
            <Skill />
            <Project />
            <Contact />


        </>
    )
}

export default App
