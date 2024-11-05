import React from "react";
import "./aboutstyle.css"
import { Link } from "react-router-dom";
//  import p1 from "../assets/pro4.png"
// import p2 from "../assets/pro2.png"


const Aboutconttant = ()=>{
    return(
        <div className="about">
            <div className="left">
                <h1>
                    Who Am I?
                </h1>
                <p>I am a Certified MERN Stack WebDeveloper</p>
                <Link  to = "/contact">
                    <button className="btn"> Contact</button>
                </Link>

            </div>
            <div className="right">
                <div className="imd-container">
                    <div className="top">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjJrjirsFl3Y-5aW1PUuPGmwWJZqftnyEsIQ&usqp=CAU" className="img" alt="reactphoto"/>

                    </div>

                    <div className="bottom">
                        <img src="https://www.bigscal.com/wp-content/uploads/2022/09/Features-of-Mern-stack-development-services-You-Should-Know.png" className="img" alt="reactphoto2"/>

                    </div>

                </div>

            </div>

        </div>
    )

}
export default Aboutconttant