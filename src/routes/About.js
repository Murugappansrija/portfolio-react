import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import MainOther from "../components/MainOther";
import Aboutconttant from "../components/Aboutconttant";

const About = ()=>{
    return(
        <div>
              <Navbar/>
              <MainOther heading ="ABOUT" text=" I Am a MERN STACK WebDeveloper"/>
              <Aboutconttant/>
         <Footer/>
        </div>
    )
}
export default About;