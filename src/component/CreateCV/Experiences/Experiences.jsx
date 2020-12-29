import React, { useState } from "react";
import Interests from "./Comps/ResumeObjective";
import ResumeObjective from "./Comps/Interests";
import "./Experiences.scss";

const experItems = [
  { title: "Interests" },
  { title: "Eductions" },
  { title: "University" },
];

const Experiences = () => {
  return (
    <div className="experiences">
      <Interests />
      {experItems.map((item, index) => (
        <ResumeObjective item={item} key={index} />
      ))}
    </div>
  );
};

export default Experiences;
