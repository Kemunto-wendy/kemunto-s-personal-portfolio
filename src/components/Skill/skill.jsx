import React from "react";
import "./skill.css"
import {RiComputerFill} from "react-icons/ri"
import {RiFirstAidKitFill} from "react-icons/ri"
import {HiAnnotation} from "react-icons/hi"

const Skill = ( ) => {
    return(
      <div className="service">
      <div className="title">
          <h1>Skills</h1>
      </div>
      <div className="box">
      <div className="card">
      <a href="#"><RiComputerFill/></a>
          <h5>Software Developer</h5>
          <div className="pra">
          <p>A health enthusiast who does research on
              health-related issues most especially
              diabetes which has become a very rampant disease to our today’s world affecting the young. </p>
          </div>
          </div>
</div>

<div className="box">
<div className="card">
<a href="#"><HiAnnotation/></a>
    <h5>Data Annotator</h5>
    <div className="pra">
          <p>A health enthusiast who does research on
              health-related issues most especially
              diabetes which has become a very rampant disease to our today’s world affecting the young. </p>
          </div>
</div>
</div>

<div className="box">
<div className="card">
<a href="#"><RiFirstAidKitFill/></a>
    <h5>Red Cross</h5>
    <div className="pra">
          <p>A health enthusiast who does research on
              health-related issues most especially
              diabetes which has become a very rampant disease to our today’s world affecting the young. </p>
          </div>
</div>
</div>
</div>

)}

export default Skill
