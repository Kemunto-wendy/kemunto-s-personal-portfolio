import React from "react";
import "./project.css"
import PORT from "../../assets/wendy.jpg"
import POR from "../../assets/troy.jpg"
import PO from "../../assets/paps.jpg"
import P from "../../assets/wendy.jpg"

const Project = ( ) => {
    return(
        <section id="Project">
            <h5>Sample Projects</h5>
            <h2>Portfolio</h2>

            <div className="portfolio">
                    <article className="item">
                            <div className="images">
                                    <img src={PORT} alt="sample project" />
                            </div>
                                <h3>This is a portfolio title</h3>
                                        <a href="https://github.com" className="btn" >Github</a>
                                        <a href="https://dribble.com/Alien_pixels" className="btn btn-primary">Live Demo</a>
                                </article>

                                <article className="item">
                                <div className="images">
                                        <img src={POR} alt="sample project" />
                                </div>
                                    <h3>This is a portfolio title</h3>
                                            <a href="https://github.com" className="btn" >Github</a>
                                            <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" >Live Demo</a>
                                    </article>

                                    <article className="item">
                            <div className="images">
                                    <img src={PO} alt="sample project" />
                            </div>
                                <h3>This is a portfolio title</h3>
                                        <a href="https://github.com" className="btn" >Github</a>
                                        <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" >Live Demo</a>
                                </article>

                                <article className="item">
                            <div className="images">
                                    <img src={P} alt="sample project" />
                            </div>
                                <h3>This is a portfolio title</h3>
                                        <a href="https://github.com" className="btn">Github</a>
                                        <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" >Live Demo</a>
                                </article>

                                <article className="item">
                            <div className="images">
                                    <img src={PORT} alt="sample project" />
                            </div>
                                <h3>This is a portfolio title</h3>
                                        <a href="https://github.com" className="btn">Github</a>
                                        <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" >Live Demo</a>
                                </article>

                                <article className="item">
                            <div className="images">
                                    <img src={PORT} alt="sample project" />
                            </div>
                                <h3>This is a portfolio title</h3>
                                        <a href="https://github.com" className="btn">Github</a>
                                        <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" >Live Demo</a>
                                </article>
            </div>
   </section>
    )
}

export default Project
