import React from "react";

const Skill = ({ icon, titre, description }) => {
  return (
    <div className="skill">
      <img src={icon} alt="logo" />
      <h3>{titre}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Skill;
