import React from "react";
import "./Mainimg2.css"

const MainOther = (props)=>{
    return(
        <div className="other-img">
            <div className="heading">
                <h1>{props.heading}</h1>
                <p>{props.text }</p>

            </div>
          
        </div>
    )
}
export default MainOther