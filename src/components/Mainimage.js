import { Link,NavLink } from "react-router-dom"
import "./Mainimage.css"
import React from "react"
import introimage from "../assets/philip-myrtorp-pyeBd1l8Guo-unsplash.jpg"
import resume from '../assets/Murugappan_srinivasan.pdf'
import { FaDownload } from "react-icons/fa";

const Mainimage =  ()=>{
    return(
        <div  className = "main">
            <div className="mask">
            <img className="into-img"src={introimage} alt="homepage-image"/>

          </div>  
        <div className="content" >
            <p>HI , I AM MURUGAPPAN</p>
            <h1>FULLSTACK WEB DEVELOPER</h1>
        <div >
            <Link to={"/project"} className="btn">PROJECTS</Link>
            {/* <Link to={res} className="btn btn-light">CONTACT</Link> */}
            <NavLink to={resume} target="blank">
            <button class="btn">
              {" "}
              download CV{" "}
              <FaDownload
                size={16}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
               </button>
          </NavLink>
        </div>
        </div>
        </div>
        
    )
}
export default Mainimage