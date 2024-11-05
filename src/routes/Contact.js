import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import MainOther from "../components/MainOther";
import Contactform from "../components/Contactform";

const Contact = ()=>{
    return(
        <div>
             <Navbar/>
             <MainOther heading ="CONTACT" text=" Lets have a chat"/>
             <Contactform/>
         <Footer/>
        </div>
    )
}
export default Contact;