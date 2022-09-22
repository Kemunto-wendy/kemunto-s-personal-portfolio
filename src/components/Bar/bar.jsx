import React from "react";
import "./bar.css"
import {HiHome} from "react-icons/hi"
import {RiUserFill} from "react-icons/ri"
import {GiNetworkBars} from "react-icons/gi"
import {SiCodio} from "react-icons/si"
import {RiContactsFill} from "react-icons/ri"
import { useState } from "react";

const Bar = ( ) => {
    const [activeBar, setActiveBar] = useState("#")
    return (
        <nav>
            <a href="#" onCllick = {( ) => setActiveBar("#")} className={activeBar === "#" ? "active" : " "}><HiHome/></a>
            <a href="#About" onClick={( ) => setActiveBar("#About")} className={activeBar === "#About" ? "active" : " "}><RiUserFill/></a>
            <a href="#Skill" onCllick = {( ) => setActiveBar("#Skill")} className={activeBar === "#Skill" ? "active" : " "}><GiNetworkBars/></a>
            <a href="#Project" onCllick = {( ) => setActiveBar("#Project")} className={activeBar === "#Project" ? "active" : " "}><SiCodio/></a>
            <a href="#Contact" onCllick = {( ) => setActiveBar("#Contact")} className={activeBar === "#Contact" ? "active" : " "}><RiContactsFill/></a>
        </nav>
    )
}

export default Bar
