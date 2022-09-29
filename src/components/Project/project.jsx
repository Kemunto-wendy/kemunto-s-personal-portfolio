import React from "react";
import "./project.css"
import PORT from "../../assets/cart.png"
import POR from "../../assets/net.png"
import PO from "../../assets/cow.png"


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




            </div>
   </section>
    )
}

export default Project
