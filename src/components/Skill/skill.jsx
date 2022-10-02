import React from "react";
import "./skill.css"
import {RiComputerFill} from "react-icons/ri"
import {GiSatelliteCommunication} from "react-icons/gi"
import {HiAnnotation} from "react-icons/hi"
import {ImHtmlFive} from "react-icons/im"
import {SiCss3} from "react-icons/si"
import {TbBrandJavascript} from "react-icons/tb"

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
          <p>As a front end developer am able to create elements and features of a website that will then be seen by the user.
          I make sure the visual aspects of a website are <span>(client side).</span></p>
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
<a href="#"><GiSatelliteCommunication/></a>
    <h5>Verbal Communication</h5>
    <div className="pra">
          <p>A health enthusiast who does research on
              health-related issues most especially
              diabetes which has become a very rampant disease to our today’s world affecting the young. </p>
          </div>
</div>
</div>

<div className="cv">
<a href="#"><ImHtmlFive/><TbBrandJavascript /><SiCss3 /></a>
        <p>Excellent interpersonal skills demonstrated through
        good verbal communication. I've gained experience in web development with expertie
        knowledge of a variety of programming languages including  HTML, CSS, JavaScript, Ruby and SQL.
        Able to work individually without direct supervision and also as a
        dedicated member of my technical team whenever required. I have a strong drive to see things to competition
        and learn more in my technical Skill since the world of technology keeps on changing every time.
        Well organized research skills to craft unique and valuable
        content for a wide variety of target audiences. </p>
</div>
</div>

)}

export default Skill
