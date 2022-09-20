import React from "react";
import "./header.css"
import Button from "./button";

const Header = ( ) => {
    return(
     <header>
        <div className="container">
            <h5>Hey <span>There!!!</span></h5>
            <h1>I'm JOY KEMUNTO</h1>
            <h5>A Junior <span>Front  End  Web</span> developer</h5>
                <Button />
            </div>
     </header>
    )
}

export default Header
