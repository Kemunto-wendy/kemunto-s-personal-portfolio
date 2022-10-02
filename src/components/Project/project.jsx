import React from "react";
import "./project.css"
import PORT from "../../assets/cart.png"
import ABOUT from "../../assets/about.png"
import ADMIN from "../../assets/admin.png"
import COW from "../../assets/cow.png"
import LOGIN from "../../assets/login.png"
import PIXEL from "../../assets/pixel.png"



const Project = ( ) => {
    return(
        <section id="Project">
            <h5>My work</h5>
            <div className="portfolio">
                    <article className="item">
                            <div className="images">
                                    <img src={PORT} alt="sample project" />
                            </div>
                                        <a href="https://github.com" className="btn" >Github</a>
                                         {/*<a href="https://dribble.com/Alien_pixels" className="btn btn-primary" >Live Demo</a> */}
                                </article>

                                <article className="item">
                                <div className="images">
                                        <img src={ADMIN} alt="sample project" />
                                </div>
                                            <a href="https://github.com" className="btn" >Github</a>
                                             {/*<a href="https://dribble.com/Alien_pixels" className="btn btn-primary" >Live Demo</a> */}
                                    </article>

                                    <article className="item">
                                    <div className="images">
                                            <img src={ABOUT} alt="sample project" />
                                    </div>
                                                <a href="https://github.com" className="btn" >Github</a>
                                                 {/*<a href="https://dribble.com/Alien_pixels" className="btn btn-primary" >Live Demo</a> */}
                                        </article>


                                        <article className="item">
                                        <div className="images">
                                                <img src={COW} alt="sample project" />
                                        </div>

                                                    <a href="https://github.com" className="btn" >Github</a>
                                                    {/*<a href="https://dribble.com/Alien_pixels" className="btn btn-primary" >Live Demo</a> */}
                                            </article>


                                            <article className="item">
                                            <div className="images">
                                                    <img src={LOGIN} alt="sample project" />
                                            </div>

                                                        <a href="https://github.com" className="btn" >Github</a>
                                                         {/*<a href="https://dribble.com/Alien_pixels" className="btn btn-primary" >Live Demo</a> */}
                                                </article>

                                                <article className="item">
                                                <div className="images">
                                                        <img src={PIXEL} alt="sample project" />
                                                </div>

                                                            <a href="https://github.com" className="btn" >Github</a>
                                                        {/*<a href="https://dribble.com/Alien_pixels" className="btn btn-primary" >Live Demo</a> */}
                                                    </article>



            </div>
   </section>
    )
}

export default Project
