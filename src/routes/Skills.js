import React from "react";
import Aboutconttant from "../components/Aboutconttant";
import Footer from "../components/Footer";
import MainOther  from "../components/MainOther";
import Navbar from "../components/Navbar";
import Skill from "../components/Skill";

const Skills = () => {
  return (
    <div>
      <Navbar />
      <MainOther  heading="SKILLS." text="My Tech Stack." />
      <Skill />
      <Footer />
    </div>
  );
};

export default Skills;