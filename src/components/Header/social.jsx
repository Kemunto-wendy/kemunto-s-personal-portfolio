import React from "react";
import {GrLinkedin} from "react-icons/gr"
import {FaGithubSquare} from "react-icons/fa"
import {GrInstagram} from "react-icons/gr"
import {FcDribbble} from "react-icons/fc"

const Social = ( ) => {
    return (
            <div className="social">
            <a href="https://www.linkedin.com/in/joy-kemunto-39506a1ba/" target= "_blank"><GrLinkedin/></a>
            <a href="https://github.com/Kemunto-wendy" target= "_blank"><FaGithubSquare/></a>
            <a href="https://instagram.com" target= "_blank"><GrInstagram/></a>
            <a href="https://dribbble.com/Truoy" target= "_blank"><FcDribbble/></a>
            </div>

    )
}

export default Social
