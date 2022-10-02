import React from "react";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Header from "./components/Header/header";
import Project from "./components/Project/project";
import Skill from "./components/Skill/skill";
import Footer from "./components/Footer/footer";

const App = ( ) => {
    return(
        <>
            <Header />
            <About />
            <Skill />
            <Project />
            <Contact />
            <Footer />
        </>
    )
}

export default App
