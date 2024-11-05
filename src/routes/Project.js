import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import MainOther from "../components/MainOther"
import Mywork from "../components/Mywork";
import Work from "../components/WORK";



const Project = ()=>{
    return(
        <div>
         <Navbar/>
        <MainOther heading ="PROJECTS" text="My Recent Works "/>
        <Work/>
     
         <Footer/>
        </div>
    )
}
export default Project;