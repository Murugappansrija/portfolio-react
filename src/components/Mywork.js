import React from "react";
import "./Mywork.css";
// import pro1 from "../assets/1pro.jpg"
import { NavLink } from "react-router-dom";
 import ProjectCardData from "./WorkcardData";

const Mywork = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="myprojects" />
      <h2 className="project-title">{props.title}</h2>
      <h3 className="project-title">{props.Skills}</h3>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">
            VIEW
          </NavLink>
          <NavLink to={props.source1} className="btn">
            FrontEnd
          </NavLink>
          <NavLink to={props.source2} className="btn">
            Backend
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Mywork;
