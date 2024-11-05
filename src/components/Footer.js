import React from "react";
  import "./Footer.css"
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = ()=>{
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                    
                        <FaHome size={20} style={{color : "white", marginRight : "2rem"}}/>
                    <div>
                        <p>1/173 Sivankovil Street</p>
                        <p>Nachandupatti</p>
                        <p>Pudukkottai</p>
                        <p>Tamilnadu- 622404</p>
                    </div>
                    </div>
                    <div className="phonenumber">
                        
                       <h4><FaPhone size={20} style={{color : "white", marginRight : "2rem"}}/>
                         +91-9159221304  </h4>  
                    </div>
                    <div className="mailid">
                      
                      <h4>  <FaMailBulk size={20} style={{color : "white", marginRight : "2rem"}}/>

                       srijamurugappan66@gmail.com   </h4>   
                    </div>
                </div>

                <div className="right">
                    <h4>About Me</h4>
                    <p>This is MURUGAPPAN ,MERN Stack Web Developer With passion for Creating and Learning </p>
             
                <div className="social">
                <a href="https://github.com/Murugappansrija">  <h4><FaGithub size={30} style={{color : "white", marginRight : "2rem"}}/>GitHub</h4></a>
                <a href="https://www.linkedin.com/in/murugappan-s/"> <h4> <FaLinkedin size={30} style={{color : "white", marginRight : "2rem"}}/> Linked IN</h4></a>
                </div>
                </div>

            </div>

        </div>
    )
}
export default Footer