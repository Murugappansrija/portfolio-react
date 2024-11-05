import React from "react";
import Navbar from "../components/Navbar";
import Mainimage from "../components/Mainimage";
import Footer from "../components/Footer";
import Work from "../components/WORK"

const Home = ()=>{
    return(
        <div>
           <Navbar/>
           <Mainimage/>
           <Work/>
                      <Footer/>
        </div>
    )
}
export default Home;