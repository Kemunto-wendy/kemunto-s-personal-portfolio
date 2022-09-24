import React from "react";
import "./about.css"
import Wendy from "../../assets/wendy.jpg"
import {BsFillAwardFill} from "react-icons/bs"

const About = ( ) => {
    return(
       <section id="me">
            <h5>Get to know me!!!</h5>
            <div className="block">
                    <div className="about">
                            <div className="image">
                                <img src={Wendy} alt="wendy" />
                            </div>
                    </div>

            <div className="content">
                    <div className="card">
                    </div>
                    <p>Web developers are experts at bringing a vision to life.
                    They take ideas and transform them into fully functional websites
                     using various development tools and programming languages.
                The development process is generally split between front-end and back-end tasks.
                Front-end developers focus on user interfaces, graphics, fonts, images, styles, layouts,
                content structure, and anything else a user can view or interact with. Back-end developers
                are more concerned with functionality. They focus on data handling, storage, and optimization within database systems.
                  If you’ve picked up some coding skills and decided to focus on front-end development,
                   then the next step is to land a job you love. A strong portfolio and resume will help you
                    stand out from a pool of applicants, but you need a solid cover letter to seal the deal.
                    Here are our best tips for nailing the letter and getting hired as a front-end developer.</p>
                    </div>
            </div>
            </section>

    )
}

export default About
