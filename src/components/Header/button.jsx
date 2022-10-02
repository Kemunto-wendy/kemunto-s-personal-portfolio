import React from "react";
import "./header.css"
import CV from "../../assets/CV.pdf"

const Button = ( ) => {
    return(
        <div className="button">
            <a href={CV} download className="btn" >Download CV </a>
            <a href={CV} view className="btn-primary">  View Resume </a>
        </div>
    )
}

export default Button
