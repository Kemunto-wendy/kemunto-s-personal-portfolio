import React from "react";
import "./header.css"
import Button from "./button";
import Social from "./social";
import Bar from "../Bar/bar";
import School from "./School/school";

const Header = ( ) => {
    return(
     <header>
                <Bar />
        <div className="container">
            <h5>Hey <span>There!!!</span></h5>
            <h1>I'm JOY KEMUNTO</h1>
            <h5>A Junior <span>Front  End  Web</span> developer</h5>
                    <Button />
                    <Social />
                    <School />
            </div>
     </header>
    )
}

export default Header
