import React from "react";
import "./contactfileform.css"

const Contactform =()=>{
    return(
        <div className="form">
            <form>
                <label>Name</label>
                <input type="text"/>
                <label>Email</label>
                <input type="email"/>
                <label>Subject</label>
                <input type="text"/>
                <label>Message</label>
               <textarea rows="7" placeholder="Enter your message here"/>
           <button className="btn">Submit</button>
            </form>

        </div>
    )
}
export default Contactform