import React from "react";
import "./contact.css"
import {MdMarkEmailRead} from "react-icons/md";
import {FcDribbble} from "react-icons/fc"
import {SiWhatsapp} from "react-icons/si"
import {TbSend} from "react-icons/tb"

const Contact = ( ) => {
    return(
        <section id="contact">
            <h2>Contact <span>Me </span></h2>

            <div className="phone">
                <div className="options">
                        <article className="option">
                        <MdMarkEmailRead  className="iconic"/>
                        <h4> Email</h4>
                            <h5> joykemunto333@gmail.com</h5>
                            <a href="mailto:joykemunto333@gmail.com"><TbSend className="juy" /></a>
                        </article>

                        <article className="option">
                        <FcDribbble  className="iconic"/>
                        <h4>Dribble</h4>
                            <h5>Truoy</h5>
                            <a href="https://dribbble.com/Truoy"><TbSend className="juy" /></a>
                        </article>

                        <article className="option">
                        <SiWhatsapp className="iconic"/>
                        <h4> Whatsapp</h4>
                            <h5>+254 </h5>
                            <a href="https://web.whatsapp.com/send?phone=+254795543445"><TbSend className="juy" /></a>
                        </article>
                </div>
                <form action="">
                    <input type="text" name="name" placeholder="Enter Your Name" required />
                    <input type="email" name="email" placeholder="Enter Email........." required />
                    <textarea name="message"  rows="7" placeholder="Type in message...." required ></textarea>
                        <button type="submit" className="btn btn-primary">Send</button>
                    </form>
            </div>
            </section>
    )
}

export default Contact
