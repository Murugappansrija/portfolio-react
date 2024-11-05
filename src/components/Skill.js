import "./SkillCardStyles.css";
import React from "react";
import SkillCardData from "./SkillCardData";

const Skill = () => {
  return (
    <div className="work-container">
      <h1 className="skill-heading">Skills</h1>
      <div className="skill-container">
        {SkillCardData.map((val) => {
          return (
            <div className="skill-card">
              <img src={val.imgsrc} alt="image" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;