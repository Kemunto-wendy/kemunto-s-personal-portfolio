import React from "react";
import "./header.css"
import Button from "./button";
import Social from "./social";
import Bar from "../Bar/bar";
import School from "./School/school";
import Nav from "../Nav/nav";

const Header = ( ) => {
    return(
     <header>
     <Nav />
        <div className="cont">
            <h5>Hey <span>There!!!</span></h5>
            <h1>I'm JOY KEMUNTO</h1>
            <h5>A Junior <span>Front  End  Web</span> developer</h5>
                    <Button />
                    <Social />
                    <Bar />
                    <School />
            </div>
     </header>
    )
}

export default Header
